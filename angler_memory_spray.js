/**
 * Angler-style Memory Spray Logic
 */
function anglerMemorySpray(count = 5000, size = 1024) {
    console.log("[MEMORY_SPRAY] Spraying memory...");

    const sprayArray = []; // Array to retain sprayed objects in memory.
    const pattern = "A".repeat(size); // Repeating predictable pattern.

    for (let i = 0; i < count; i++) {
        // Add predictable objects to the heap.
        sprayArray.push(JSON.parse(`{"data":"${pattern}"}`));
    }

    console.log("[MEMORY_SPRAY] Completed spraying memory.");
    return sprayArray;
}
