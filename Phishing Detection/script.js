document.addEventListener("DOMContentLoaded", () => {
    const urlInput = document.getElementById("urlInput");
    const analyzeUrlButton = document.getElementById("analyzeUrlButton");
    const emailFileInput = document.getElementById("emailFileInput");
    const analyzeEmailButton = document.getElementById("analyzeEmailButton");
    const resultsArea = document.getElementById("resultsArea");
    const fileNameDisplay = document.getElementById("fileName");

    // Handle URL Analysis
    analyzeUrlButton.addEventListener("click", () => {
        const url = urlInput.value.trim();
        if (!url) {
            resultsArea.textContent = "Please enter a valid URL!";
            return;
        }

        // Simulate phishing analysis for the URL
        resultsArea.textContent = "Analyzing URL...";
        setTimeout(() => {
            resultsArea.textContent = `The URL "${url}" is safe to visit. No phishing detected.`;
        }, 2000);
    });

    // Handle Email File Upload
    emailFileInput.addEventListener("change", (event) => {
        const file = event.target.files[0];
        if (file) {
            fileNameDisplay.textContent = `Uploaded: ${file.name}`;
            analyzeEmailButton.disabled = false;
        }
    });

    // Handle Email Analysis
    analyzeEmailButton.addEventListener("click", () => {
        const file = emailFileInput.files[0];
        if (!file) {
            resultsArea.textContent = "Please upload an email file!";
            return;
        }

        // Simulate phishing analysis for the email
        resultsArea.textContent = "Analyzing email content...";
        setTimeout(() => {
            resultsArea.textContent = `The email "${file.name}" contains suspicious links. Phishing detected!`;
        }, 2000);
    });
});
