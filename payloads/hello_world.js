// Remove any previous notification if present
let prevNotif = document.getElementById('ps-notification');
if (prevNotif) {
    prevNotif.remove();
}

// Create the notification container
const notif = document.createElement('div');
notif.id = "ps-notification";
notif.style.position = "fixed";
notif.style.top = "40px"; // Or "bottom: 40px" for bottom position
notif.style.left = "50%";
notif.style.transform = "translateX(-50%)";
notif.style.background = "rgba(20, 20, 20, 0.96)";
notif.style.color = "#00FFFF"; // Cyan
notif.style.fontFamily = "PS5, 'Segoe UI', Arial, sans-serif";
notif.style.fontWeight = "bold";
notif.style.fontSize = "2.6em";
notif.style.padding = "24px 80px";
notif.style.borderRadius = "24px";
notif.style.boxShadow = "0 8px 28px rgba(0,0,0,0.3)";
notif.style.zIndex = "10000";
notif.style.display = "flex";
notif.style.alignItems = "center";
notif.style.justifyContent = "center";
notif.textContent = "HELLO WORLD";

// Optionally include a PlayStation icon SVG
const icon = document.createElement('span');
icon.innerHTML = `<svg width="44" height="44" viewBox="0 0 44 44"><circle cx="22" cy="22" r="22" fill="#fff"/><text x="50%" y="58%" text-anchor="middle" fill="#1DB9FF" font-size="30" font-family="Arial" dy=".3em">🅟</text></svg>`;
icon.style.marginRight = "24px";
notif.prepend(icon);

// Append to document body
document.body.appendChild(notif);

// Animate fade out after a few seconds
setTimeout(() => {
    notif.style.transition = "opacity 0.75s";
    notif.style.opacity = "0";
    setTimeout(() => notif.remove(), 750);
}, 3200);

// Optionally log for console debugging
console.log("[PS-HELLO] Notification shown!");
