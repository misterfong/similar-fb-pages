chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
    chrome.pageAction.show(sender.tab.id);
  });

// Called when the user clicks on the page action.
chrome.pageAction.onClicked.addListener(function(tab) {
  var re = /www.facebook.com/;
  var newUrl = tab.url.replace(re, 'graph.facebook.com');
  $.get(newUrl, function(data) {
    chrome.tabs.update(tab.id, {
      url: "https://www.facebook.com/pages/?frompageid="+data.id
    });
  });
});