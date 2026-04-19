(() => {
    function psNotify(msg) {
        let prev = document.getElementById('ps-notification');
        if (prev) prev.remove();
        const notif = document.createElement('div');
        notif.id = "ps-notification";
        notif.style.position = "fixed";
        notif.style.top = "140px";
        notif.style.left = "50%";
        notif.style.transform = "translateX(-50%)";
        notif.style.background = "rgba(20,45,60,0.94)";
        notif.style.color = "#ffee42";
        notif.style.fontFamily = "PS5, 'Segoe UI', Arial, sans-serif";
        notif.style.fontWeight = "bold";
        notif.style.fontSize = "1.7em";
        notif.style.padding = "15px 50px";
        notif.style.borderRadius = "15px";
        notif.style.zIndex = "10002";
        notif.textContent = msg;
        document.body.appendChild(notif);
        setTimeout(() => {
            notif.style.transition = "opacity 0.63s";
            notif.style.opacity = "0";
            setTimeout(() => notif.remove(), 820);
        }, 2000);
    }
    function domLog(msg) {
        if (document.getElementById("log")) {
            const p = document.createElement('p');
            p.textContent = "[BIN2MEM] " + msg;
            p.style.color = "#f5e547";
            document.getElementById("log").appendChild(p);
        }
        console.log("[BIN2MEM] " + msg);
    }
    domLog("Loading binary /dev/hdd0/game/eboot.bin ... (simulated)");
    setTimeout(() => {
        domLog("Read 8 bytes into memory buffer.");
        psNotify("bin_to_mem: loaded to RAM (demo)");
    }, 1300);
})();
