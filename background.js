// background.js

// Initialize SpeechRecognition
const recognition = new webkitSpeechRecognition();

// Set additional configurations
recognition.continuous = true;
recognition.interimResults = false; // Set to true if you want interim results
recognition.lang = "en-US"; // Set the language (adjust as needed)
recognition.maxAlternatives = 1;

console.log(recognition)
// Set up Annyang commands


// Start listening for speech
recognition.onresult = function (event) {
    for (let i = 0; i < event.results.length; i++) {
      if (i === event.results.length - 1) {
        const text = event.results[i][0].transcript;
        console.log("This is the latest text:", text);
        if (text.toLowerCase().includes("open youtube")) {
          chrome.tabs.create({
              "url": "https://www.youtube.com" 
          });
      }
  }
}
};


// Start listening when extension is installed
recognition.start();


