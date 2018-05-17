// background.js

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // test...
//   chrome.storage.sync.set({color: '#3aa757'}, function() {
//   console.log('The color is green.');
// });
  // Send a message to the active tab
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    console.log("seding message from bachground")
    chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
  });
});
