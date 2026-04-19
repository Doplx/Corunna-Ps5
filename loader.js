let isPS5 = false;
let scriptsLoaded = false;

function log(msg, err) {
    const p = document.createElement('p');
    p.textContent = msg;
    if (err) p.style.color = "red";
    document.getElementById("log").appendChild(p);
}
function detectPlatform() {
    const userAgent = navigator.userAgent;
    const platform = navigator.platform;
    if (platform.includes("PlayStation") && userAgent.includes("10.60")) {
        isPS5 = true;
        document.getElementById("status").innerText = "PS5 10.60 Detected!";
        log("[PLATFORM] PS5 10.60 Detected!");
    } else {
        document.getElementById("status").innerText = "Unsupported Platform";
        log("[PLATFORM] Unsupported platform detected.", true);
    }
}
function loadScriptsSequentially() {
    const scripts = [
        "heap_spray.js",
        "exploit.js"
    ];
    let index = 0;
    const loadNext = () => {
        if (index === scripts.length) {
            scriptsLoaded = true;
            document.getElementById("runBtn").disabled = false;
            log("All scripts loaded successfully.");
            return;
        }
        const script = document.createElement("script");
        script.src = scripts[index];
        script.async = false;
        script.onload = () => {
            log(`[SCRIPT LOADED]: ${scripts[index]}`);
            index++;
            loadNext();
        };
        script.onerror = () => {
            log(`[FAILED TO LOAD]: ${scripts[index]}`, true);
        };
        document.body.appendChild(script);
    };
    loadNext();
}
document.getElementById("loadBtn").onclick = function() {
    if (!isPS5) {
        alert("PS5 Platform Required. Please try again on PS5!");
        return;
    }
    if (scriptsLoaded) {
        log("Scripts already loaded.");
        return;
    }
    loadScriptsSequentially();
};
document.getElementById("runBtn").onclick = function() {
    if (window.runExploit) {
        log("[EXPLOIT]: Running...");
        window.runExploit();
    } else {
        log("[EXPLOIT ERROR]: runExploit not available.", true);
    }
};
detectPlatform();
