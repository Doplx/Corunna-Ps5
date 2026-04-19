/**
 * Performs live heap spraying and updates logs/progress in real time.
 */
function anglerMemorySpray(sprayCount = 5000, spraySize = 1024) {
    console.log("[MEMORY SPRAY] Starting spray with live progress...");

    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    const sprayArray = [];
    const step = Math.ceil(sprayCount / 100); // Progress updates every 1%
    const pattern = "A".repeat(spraySize);

    for (let i = 0; i < sprayCount; i++) {
        sprayArray.push({ data: pattern });

        if (i % step === 0) {
            const percentComplete = Math.round((i / sprayCount) * 100);
            progressBar.value = percentComplete;
            progressText.textContent = `Heap Spray Progress: ${percentComplete}%`;
        }
    }

    progressBar.value = 100;
    progressText.textContent = "Heap Spray Progress: Complete!";
    console.log("[MEMORY SPRAY] Spray complete.");
    return sprayArray;
}
