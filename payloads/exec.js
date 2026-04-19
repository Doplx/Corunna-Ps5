(() => {
    function psNotify(msg) {
        let prev = document.getElementById('ps-notification');
        if (prev) prev.remove();
        const notif = document.createElement('div');
        notif.id = "ps-notification";
        notif.style.position = "fixed";
        notif.style.top = "180px";
        notif.style.left = "50%";
        notif.style.transform = "translateX(-50%)";
        notif.style.background = "rgba(74,20,160,0.92)";
        notif.style.color = "#fff78c";
        notif.style.fontFamily = "PS5, 'Segoe UI', Arial, sans-serif";
        notif.style.fontWeight = "bold";
        notif.style.fontSize = "1.45em";
        notif.style.padding = "15px 50px";
        notif.style.borderRadius = "15px";
        notif.style.zIndex = "10002";
        notif.textContent = msg;
        document.body.appendChild(notif);
        setTimeout(() => {
            notif.style.transition = "opacity 0.5s";
            notif.style.opacity = "0";
            setTimeout(() => notif.remove(), 680);
        }, 1700);
    }
    function domLog(msg) {
        if (document.getElementById("log")) {
            const p = document.createElement('p');
            p.textContent = "[EXEC] " + msg;
            p.style.color = "#fff78c";
            document.getElementById("log").appendChild(p);
        }
        console.log("[EXEC] " + msg);
    }
    domLog("Simulate running ELF from memory at 0x8e000000 (stub)");
    setTimeout(() => {
        psNotify("ELF executed (sim)");
        domLog("exec() simulated complete.");
    }, 1860);
})();
