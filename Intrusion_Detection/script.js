document.addEventListener("DOMContentLoaded", () => {
    const networkLogInput = document.getElementById("networkLogInput");
    const analyzeLogButton = document.getElementById("analyzeLogButton");
    const resultsArea = document.getElementById("resultsArea");
    const fileNameDisplay = document.getElementById("fileName");

    // Handle File Upload
    networkLogInput.addEventListener("change", (event) => {
        const file = event.target.files[0];
        if (file) {
            fileNameDisplay.textContent = `Uploaded: ${file.name}`;
            analyzeLogButton.disabled = false;
        }
    });

    // Handle Log Analysis
    analyzeLogButton.addEventListener("click", () => {
        const file = networkLogInput.files[0];
        if (!file) {
            resultsArea.textContent = "Please upload a network log file!";
            return;
        }

        // Simulate ML-driven intrusion analysis
        resultsArea.textContent = "Analyzing network log...";
        setTimeout(() => {
            const anomalyDetected = Math.random() > 0.5; // Simulate random anomaly detection
            if (anomalyDetected) {
                resultsArea.innerHTML = `
                    <p><strong>Alert:</strong> Unusual activity detected in the network log.</p>
                    <ul>
                        <li><strong>Source IP:</strong> 192.168.1.100</li>
                        <li><strong>Activity:</strong> Suspicious port scanning detected.</li>
                        <li><strong>Recommended Action:</strong> Block IP and investigate further.</li>
                    </ul>
                `;
            } else {
                resultsArea.textContent = "No unusual activity detected. The network appears secure.";
            }
        }, 2000);
    });
});
