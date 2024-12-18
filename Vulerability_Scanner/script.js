document.addEventListener("DOMContentLoaded", () => {
    const websiteUrlInput = document.getElementById("websiteUrl");
    const scanButton = document.getElementById("scanButton");
    const resultsArea = document.getElementById("resultsArea");

    // Handle Scan Button Click
    scanButton.addEventListener("click", () => {
        const url = websiteUrlInput.value.trim();
        if (!url) {
            resultsArea.textContent = "Please enter a valid website URL.";
            return;
        }

        resultsArea.textContent = "Scanning website for vulnerabilities...";
        
        // Simulated Vulnerability Scan
        setTimeout(() => {
            const vulnerabilities = [
                {
                    name: "Cross-Site Scripting (XSS)",
                    status: Math.random() > 0.5 ? "Detected" : "Not Detected",
                    description: "XSS vulnerabilities allow attackers to inject malicious scripts into webpages."
                },
                {
                    name: "Brute Force Risk",
                    status: Math.random() > 0.5 ? "Detected" : "Not Detected",
                    description: "Weak password protection mechanisms increase the risk of brute force attacks."
                },
                {
                    name: "SQL Injection",
                    status: Math.random() > 0.5 ? "Detected" : "Not Detected",
                    description: "SQL Injection vulnerabilities allow attackers to manipulate database queries."
                }
            ];

            let resultsHtml = `<ul>`;
            vulnerabilities.forEach(vul => {
                resultsHtml += `
                    <li>
                        <strong>${vul.name}:</strong> ${vul.status} <br>
                        <small>${vul.description}</small>
                    </li>
                `;
            });
            resultsHtml += `</ul>`;

            resultsArea.innerHTML = resultsHtml;
        }, 2000);
    });
});
