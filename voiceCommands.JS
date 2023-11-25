// // background.js

// // Initialize SpeechRecognition
// const recognition = new webkitSpeechRecognition();

// // Set additional configurations
// recognition.continuous = true;
// recognition.interimResults = false; // Set to true if you want interim results
// recognition.lang = "en-US"; // Set the language (adjust as needed)
// recognition.maxAlternatives = 1;

// console.log(recognition)
// // Set up Annyang commands


// // Start listening for speech
// recognition.onresult = function (event) {
//     for (let i = 0; i < event.results.length; i++) {
//       if (i === event.results.length - 1) {
//         const text = event.results[i][0].transcript;
//         console.log("This is the latest text:", text);
//         if (text.toLowerCase().includes("open youtube")) {
//           chrome.tabs.create({
//               "url": "https://www.youtube.com" 
//           });
//       }
//   }
// }
// };


// // Start listening when extension is installed
// recognition.start();


var messages = ['🔊 Hey', '🔊 Hi, there!', '🔊 Hi!', '🔊 Hello'];

if(annyang){
    console.log("We have annyang!");

    var commands = {
        'Hello' : hello,
        'What is your name' : myname,
        'Open Youtube': openYoutube
    }

    function hello(){
        var randomIndex = Math.round(Math.random() * messages.length);
        console.log(`%c ${messages[randomIndex]}`,'color: green; font-weight:bold;');
    }

    function myname(){
      console.log(arguments[0])
        console.log("My name is Billy!");
    }
    function openYoutube(){
     console.log(arguments[0])
    }

    // Add Commands
    annyang.addCommands(commands);
     // Add callback to capture recognized text
     annyang.addCallback('result', function (phrases) {
      console.log(`User said: ${phrases[0]}`);
  });

    // Start listening
    annyang.start();

}