document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('checkPage');
  checkPageButton.addEventListener('click', function() {
    console.log("Asdfa");
    chrome.tabs.getSelected(null, function(tab) {
      d = document;
      console.log("Asdfa");
      // var f = d.createElement('form');
      // f.action = 'http://gtmetrix.com/analyze.html?bm';
      // f.method = 'post';
      // var i = d.createElement('input');
      // i.type = 'hidden';
      // i.name = 'url';
      // i.value = tab.url;
      // f.appendChild(i);
      // d.body.appendChild(f);
      // f.submit();
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var activeTab = tabs[0];
        console.log("seding message from bachground")
        chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
      });
    });
  }, false);
}, false);
