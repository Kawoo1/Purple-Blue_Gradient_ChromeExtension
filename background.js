//This javascript file handles message passing.
//Updated to properly use the chrome.scripting API, again.
chrome.runtime.onInstalled.addListener(function() {
  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "applyGradient") {
      applyGradient(); // Execute your function to apply the gradient
      sendResponse({ message: "Gradient applied successfully" });
    }
  });

  function applyGradient() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      const activeTab = tabs[0];
      chrome.tabs.executeScript(activeTab.id, {
        code: `
          document.body.style.background = 'linear-gradient(to bottom, #8E44AD, #3498DB)';
        `
      });
    });
  }
});
