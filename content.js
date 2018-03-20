// content.js
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.message === "clicked_browser_action") {

      var firstHref = $("a[href^='http']").eq(0).attr("href");
      //alert(firstHref);
      console.log(firstHref);

      var list = [];
      chrome.storage.sync.get(['links'], function(result) {
        list = result.links;
        console.log('Value currently is ' + result.links);
      });

      list.push(firstHref);
      chrome.storage.sync.set({
        links:list
      }, function() {
        console.log('Value is set to ' + list);
      });
    }
  }
);
