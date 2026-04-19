(() => {
    function psNotify(msg) {
        let prev = document.getElementById('ps-notification');
        if (prev) prev.remove();
        const notif = document.createElement('div');
        notif.id = "ps-notification";
        notif.style.position = "fixed";
        notif.style.top = "290px";
        notif.style.left = "50%";
        notif.style.transform = "translateX(-50%)";
        notif.style.background = "rgba(17, 49, 79, 0.93)";
        notif.style.color = "#a7d8e7";
        notif.style.fontFamily = "PS5, 'Segoe UI', Arial, sans-serif";
        notif.style.fontWeight = "bold";
        notif.style.fontSize = "1.2em";
        notif.style.padding = "11px 37px";
        notif.style.borderRadius = "14px";
        notif.style.zIndex = "10004";
        notif.textContent = msg;
        document.body.appendChild(notif);
        setTimeout(() => {
            notif.style.transition = "opacity 0.35s";
            notif.style.opacity = "0";
            setTimeout(() => notif.remove(), 440);
        }, 900);
    }
    function domLog(msg) {
        if (document.getElementById("log")) {
            const p = document.createElement('p');
            p.textContent = "[CORUNA/PAYLOADS] " + msg;
            p.style.color = "#a7d8e7";
            document.getElementById("log").appendChild(p);
        }
        console.log("[PAYLOADS] " + msg);
    }
    domLog("Payloads.js demo loaded.");
    setTimeout(() => {
        psNotify("All payloads loaded");
    }, 500);
})();
