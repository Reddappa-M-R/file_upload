async function uploadFile() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    const formData = new FormData();
    formData.append('file', file);

    try {
        const response = await fetch('http://localhost:8010/upload/', {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            throw new Error('Upload failed');
        }

        const data = await response.json();
        const responseMessage = document.getElementById('responseMessage');
        responseMessage.innerText = `File uploaded successfully: ${data.file}`;
        responseMessage.classList.add('success');
    } catch (error) {
        document.getElementById('responseMessage').innerText = 'An error occurred while uploading the file. Please try again later.';
        console.error('Error uploading file:', error);
    }
}
