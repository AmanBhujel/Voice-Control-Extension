document.getElementById('grantPermissions').addEventListener('click', async () => {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        stream.getTracks().forEach(t => t.stop());
        alert("Microphone permissions granted!");
    } catch (error) {
        console.error("Error requesting microphone permissions:", error);
        alert('Microphone permissions denied. Please grant permission to continue.');
    }
});
