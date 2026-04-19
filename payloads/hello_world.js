console.log("[PAYLOAD] Executing Hello World payload...");

(function () {
    const div = document.createElement("div");
    div.style.position = "fixed";
    div.style.top = "50%";
    div.style.left = "50%";
    div.style.transform = "translate(-50%, -50%)";
    div.style.backgroundColor = "black";
    div.style.color = "white";
    div.style.padding = "20px";
    div.style.zIndex = "1000";
    div.innerText = "HELLO WORLD!";
    document.body.appendChild(div);
})();
