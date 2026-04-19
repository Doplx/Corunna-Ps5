console.log("[PLATFORM] Checking PS5 compatibility");

let platformChecker = (() => {
    return {
        isSupported() {
            const platform = navigator.platform;
            const userAgent = navigator.userAgent;
            return platform.includes("PlayStation") && userAgent.includes("10.60");
        },
    };
})();
