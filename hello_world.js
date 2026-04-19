// HELLO WORLD PAYLOAD

console.log("[PAYLOAD] Executing 'Hello World' Payload...");

if (typeof logger !== "undefined" && typeof nrdp !== "undefined" && typeof nrdp.gibbon !== "undefined") {
    // Clear the logger lines and refresh the overlay
    logger.lines = [];
    logger.refresh();

    // Create a large text widget for HELLO WORLD
    var helloWidget = nrdp.gibbon.makeWidget({
        name: "hello",
        x: 200,
        y: 250,
        width: 880,
        height: 220
    });

    helloWidget.text = {
        contents: "HELLO WORLD",
        size: 72,
        color: { a: 255, r: 0, g: 255, b: 255 }, // Cyan
        wrap: false
    };

    // Add the text widget to the logger's overlay
    helloWidget.parent = logger.overlay;

    // Send a notification
    send_notification("Hello Netflix! 🎬");

    // Log payload execution success
    logger.log("Payload executed!");
    logger.log("Hello World displayed");
    logger.flush();
} else {
    console.error("[PAYLOAD ERROR] Required dependencies (logger, nrdp) not found!");
}
