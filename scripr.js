document.getElementById('removeBgBtn').addEventListener('click', async () => {
    const fileInput = document.getElementById('imageInput');
    const file = fileInput.files[0];
    if (!file) return;

    const response = await fetch('https://api.remove.bg/v1.0/removebg', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Api-Key': 'YOUR_API_KEY' // Replace with your Remove.bg API key
        },
        body: JSON.stringify({image_url: URL.createObjectURL(file)})
    });

    const data = await response.json();
    const imageContainer = document.getElementById('imageContainer');
    const img = document.createElement('img');
    img.src = data.url;
    imageContainer.appendChild(img);
});
