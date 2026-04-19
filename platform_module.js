let m_14669ca3b1519ba2a8f40be287f646d4d7593eb0 = () => {
    let platformState = {
        versionFlags: {
            POINTER_MASK: 0xFFFFFFFFFF,
            JIT_BASE_OFFSET: 0x123456,
            HEAP_LIMIT: 0x7FFFFFFFF,
        },
        firmwareVersion: "10.60",
    };

    return {
        platformState,

        stripPointerTag: (ptr) => {
            return ptr & platformState.versionFlags.POINTER_MASK;
        },

        init: (telemetry, baseUrl, cookies, platform, userAgent) => {
            if (platform.includes("PlayStation") && userAgent.includes("10.60")) {
                platformState.versionFlags["JIT_ENABLED"] = true;
                platformState.versionFlags["sandboxed"] = true;
                return true;
            } else {
                return false;
            }
        },

        alignMemoryAddress: (address) => {
            return address & ~0x7;
        },

        getOffsets: () => platformState.versionFlags,
    };
};
