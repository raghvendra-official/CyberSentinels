document.addEventListener("DOMContentLoaded", () => {
    const fileInput = document.getElementById("fileInput");
    const fileNameDisplay = document.getElementById("fileName");
    const processButton = document.getElementById("processButton");
    const previewArea = document.getElementById("previewArea");
    const statusMessage = document.getElementById("statusMessage");
  
    let uploadedFile = null;
  
    // Handle file upload
    fileInput.addEventListener("change", (event) => {
      const file = event.target.files[0];
      if (file) {
        uploadedFile = file;
        fileNameDisplay.textContent = `Uploaded: ${file.name}`;
        processButton.disabled = false;
  
        // Preview the file
        const reader = new FileReader();
        reader.onload = () => {
          previewArea.innerHTML = "";
          if (file.type.startsWith("image/")) {
            const img = document.createElement("img");
            img.src = reader.result;
            img.style.maxWidth = "100%";
            img.style.height = "auto";
            previewArea.appendChild(img);
          } else if (file.type.startsWith("video/")) {
            const video = document.createElement("video");
            video.src = reader.result;
            video.controls = true;
            video.style.maxWidth = "100%";
            previewArea.appendChild(video);
          } else {
            previewArea.textContent = "Unsupported file type!";
          }
        };
        reader.readAsDataURL(file);
      }
    });
  
    // Handle watermark processing
    processButton.addEventListener("click", () => {
      if (uploadedFile) {
        // Simulate processing
        statusMessage.textContent = "Embedding watermark... Please wait.";
        setTimeout(() => {
          statusMessage.textContent = "Watermark embedded successfully!";
        }, 2000);
      }
    });
  });
  