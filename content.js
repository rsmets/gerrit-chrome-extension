// content.js
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    // if (request.message === "clicked_browser_action") {

      var firstHref = $("a[href^='http']").eq(0).attr('href');
      var url = $(location).attr('href');
      console.log(url);
      console.log(firstHref);

      var list = ['haha.com'];
      // chrome.storage.sync.get(['links'], function(result) {
      //   list = result.links;
      //   console.log('Value currently is ' + list);
      //
      //   return result.links;
      // });
      getLinks();

      list.push(url);
      chrome.storage.sync.set({
        links:list
      }, function() {
        console.log('Value is set to ' + getLinks() );
      });
    // }
  }
);

function getLinks() {
  chrome.storage.sync.get(['links'], function(result) {
    list = result.links;
    console.log('Value currently is ' + list);

    return result.links;
  });
}
