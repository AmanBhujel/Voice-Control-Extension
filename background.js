chrome.runtime.onInstalled.addListener((details) => {
    // if (details.reason.search(/install/g) === -1) {
    //     console.log("returning")
    //     return;
    // }
    console.log("creating")
    chrome.tabs.create({
        url: chrome.runtime.getURL("permissions.html"),
        active: true
    });
});
console.log('it is running ')