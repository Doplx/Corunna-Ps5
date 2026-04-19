function anglerMemorySpray(sprayCount = 5000, spraySize = 1024) {
    const progressBar = document.getElementById("progress-bar");
    const progressText = document.getElementById("progress-text");
    const sprayArray = [];
    const step = Math.ceil(sprayCount / 100);
    const pattern = "A".repeat(spraySize);

    for (let i = 0; i < sprayCount; i++) {
        sprayArray.push({ data: pattern });
        if (i % step === 0 || i === sprayCount - 1) {
            const percent = Math.round((i / sprayCount) * 100);
            progressBar.value = percent;
            progressText.textContent = `Heap Spray Progress: ${percent}%`;
        }
    }
    progressBar.value = 100;
    progressText.textContent = "Heap Spray Progress: Complete!";
    return sprayArray;
}
console.log("[ANGLER MEMORY SPRAY] Loaded");
