(() => {
    function psNotify(msg) {
        let prev = document.getElementById('ps-notification');
        if (prev) prev.remove();
        const notif = document.createElement('div');
        notif.id = "ps-notification";
        notif.style.position = "fixed";
        notif.style.top = "340px";
        notif.style.left = "50%";
        notif.style.transform = "translateX(-50%)";
        notif.style.background = "rgba(19, 79, 22, 0.94)";
        notif.style.color = "#afeeb4";
        notif.style.fontFamily = "PS5, 'Segoe UI', Arial, sans-serif";
        notif.style.fontWeight = "bold";
        notif.style.fontSize = "1.2em";
        notif.style.padding = "11px 37px";
        notif.style.borderRadius = "12px";
        notif.style.zIndex = "10005";
        notif.textContent = msg;
        document.body.appendChild(notif);
        setTimeout(() => {
            notif.style.transition = "opacity 0.39s";
            notif.style.opacity = "0";
            setTimeout(() => notif.remove(), 650);
        }, 700);
    }
    function domLog(msg) {
        if (document.getElementById("log")) {
            const p = document.createElement('p');
            p.textContent = "[SBX] " + msg;
            p.style.color = "#afeeb4";
            document.getElementById("log").appendChild(p);
        }
        console.log("[SBX] " + msg);
    }
    domLog("Simulated sandbox escape called (not real)");
    setTimeout(() => {
        psNotify("Sandbox 'escaped' (stub)");
        domLog("sandbox_escape() simulated complete.");
    }, 780);
})();
