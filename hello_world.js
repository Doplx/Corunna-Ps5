console.log("[HELLO_WORLD] Executing Hello World payload...");

(function () {
    if (typeof logger !== "undefined" && typeof nrdp.gibbon !== "undefined") {
        // Clear logger
        logger.lines = [];
        logger.refresh();

        // Create a Hello World text widget
        const helloText = nrdp.gibbon.makeWidget({
            name: "hello_widget",
            x: 200,
            y: 200,
            width: 800,
            height: 150,
        });

        helloText.text = {
            contents: "HELLO WORLD",
            size: 72,
            color: { r: 255, g: 0, b: 0, a: 255 }, // Red color
            wrap: false,
        };

        helloText.parent = logger.overlay;

        // Log payload execution
        logger.log("Hello World Payload triggered.");
        logger.flush();
    } else {
        console.error("[HELLO_WORLD] Logger or NRDP not found.");
    }
})();
