console.log("[UTILITY MODULE] Loaded");

// Stubs for core memory and syscall helpers (overwrite with real functions in exploit)
window.logger = {
    log: (msg) => console.log(msg),
    init: () => {},
};
window.send_notification = (msg) => console.log("[NOTIFY]", msg);

// Stubs for native memory/IO (replace with real for a full exploit)
window.syscall = function() { return 0; };
window.malloc = function() { return 0n; };
window.alloc_string = function() { return 0n; };
window.read8_uncompressed = function() { return 0; };
window.read16_uncompressed = function() { return 0; };
window.read32_uncompressed = function() { return 0; };
window.write8_uncompressed = function() {};
window.write16_uncompressed = function() {};
window.write32_uncompressed = function() {};
window.get_current_ip = function() { return "192.168.1.222"; } // change as needed
window.nrdp = { setTimeout: setTimeout };
