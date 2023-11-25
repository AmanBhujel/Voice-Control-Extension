async function requestMicrophonePermissions() {
    // try {
    //     const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    //     stream.getTracks().forEach(t => t.stop());
    //     alert("Microphone permissions granted!");
    // } catch (error) {
    //     if (error.name === 'NotAllowedError') {
    //         console.warn('User denied microphone permissions.');
    //         alert('Microphone permissions denied. Please grant permission to continue.');
    //     } else {
    //         console.error("Error requesting microphone permissions:", error);
    //     }
    // }
    // Request audio permissions
    chrome.permissions.request({ permissions: ['audio'] }, function (granted) {
        if (granted) {
            console.log('Microphone permissions granted!');
        } else {
            console.warn('User denied microphone permissions.');
            alert('Microphone permissions denied. Please grant permission to continue.');
        }
    });
    // navigator.mediaDevices.getUserMedia({ audio: true })
    //     .then(function () {
    //         console.log("auto-trigger: Microphone access granted.");
    //     })
    //     .catch(function (error) {
    //         console.error('Error accessing microphone:', error);
    //         alert('No Microphone Accessed.');
    //     });
}

// Call the function when the page loads
const button = document.getElementById('btn');
button.addEventListener('click', requestMicrophonePermissions);
