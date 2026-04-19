console.log("[PAYLOAD] Hello World Payload Executing...");

(function helloWorld() {
    const message = document.createElement('div');
    message.style.position = 'absolute';
    message.style.top = '50%';
    message.style.left = '50%';
    message.style.transform = 'translate(-50%, -50%)';
    message.style.background = 'black';
    message.style.color = 'white';
    message.style.padding = '20px';
    message.style.zIndex = '9999';
    message.style.border = '2px solid white';
    message.innerText = "HELLO WORLD!";

    document.body.appendChild(message);
})();
