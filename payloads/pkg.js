(() => {
    function psNotify(msg) {
        let prev = document.getElementById('ps-notification');
        if (prev) prev.remove();
        const notif = document.createElement('div');
        notif.id = "ps-notification";
        notif.style.position = "fixed";
        notif.style.top = "240px";
        notif.style.left = "50%";
        notif.style.transform = "translateX(-50%)";
        notif.style.background = "rgba(88, 21, 17, 0.99)";
        notif.style.color = "#e2dad6";
        notif.style.fontFamily = "PS5, 'Segoe UI', Arial, sans-serif";
        notif.style.fontWeight = "bold";
        notif.style.fontSize = "1.4em";
        notif.style.padding = "12px 50px";
        notif.style.borderRadius = "15px";
        notif.style.zIndex = "10003";
        notif.textContent = msg;
        document.body.appendChild(notif);
        setTimeout(() => {
            notif.style.transition = "opacity 0.45s";
            notif.style.opacity = "0";
            setTimeout(() => notif.remove(), 650);
        }, 1400);
    }
    function domLog(msg) {
        if (document.getElementById("log")) {
            const p = document.createElement('p');
            p.textContent = "[PKG] " + msg;
            p.style.color = "#e2dad6";
            document.getElementById("log").appendChild(p);
        }
        console.log("[PKG] " + msg);
    }
    domLog("Splitting package... (sim)");
    setTimeout(() => {
        psNotify("PKG: 2 parts created (stub)");
        domLog("split_pkg simulated done.");
    }, 1100);
})();
