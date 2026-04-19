(() => {
    function psNotify(msg) {
        let prev = document.getElementById('ps-notification');
        if (prev) prev.remove();
        const notif = document.createElement('div');
        notif.id = "ps-notification";
        notif.style.position = "fixed";
        notif.style.top = "90px";
        notif.style.left = "50%";
        notif.style.transform = "translateX(-50%)";
        notif.style.background = "rgba(38,38,38,0.98)";
        notif.style.color = "#00DDDD";
        notif.style.fontFamily = "PS5, 'Segoe UI', Arial, sans-serif";
        notif.style.fontWeight = "bold";
        notif.style.fontSize = "2em";
        notif.style.padding = "16px 56px";
        notif.style.borderRadius = "18px";
        notif.style.zIndex = "10001";
        notif.style.boxShadow = "0 8px 24px #333";
        notif.textContent = msg;
        document.body.appendChild(notif);
        setTimeout(() => {
            notif.style.transition = "opacity 0.5s";
            notif.style.opacity = "0";
            setTimeout(() => notif.remove(), 850);
        }, 2200);
    }
    function domLog(msg) {
        if (document.getElementById("log")) {
            const p = document.createElement('p');
            p.textContent = "[FTP] " + msg;
            p.style.color = "#27c8c8";
            document.getElementById("log").appendChild(p);
        }
        console.log("[FTP] " + msg);
    }
    psNotify("FTP interface loaded (simulated, no real sockets)");
    domLog("FTP payload loaded (PS5, browser context only, demo)");
    setTimeout(() => {
        domLog("Files in / (simulated):");
        domLog("- my_app.bin");
        domLog("- update.pkg");
        domLog("- readme.txt");
        psNotify("FTP List: completed (demo)");
    }, 1200);
})();
