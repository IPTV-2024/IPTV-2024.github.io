// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const downloadButton = document.querySelector('.download-button');

    downloadButton.addEventListener('click', () => {
        downloadButton.textContent = 'Downloading...';
        downloadButton.classList.add('downloading');

        // Simulate a file download process
        setTimeout(() => {
            downloadButton.textContent = 'Download Now';
            downloadButton.classList.remove('downloading');
            alert('Download Started!');
        }, 3000); // 3 seconds delay to simulate download time
    });
});
