//This javascript file handles message passing.
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "applyGradient") {
      chrome.scripting.executeScript({
        target: { tabId: request.tabId },
        function: applyGradient
      });
    }
  });
  
  function applyGradient() {
    document.body.style.background = 'linear-gradient(to bottom, #8E44AD, #3498DB)';
  }
