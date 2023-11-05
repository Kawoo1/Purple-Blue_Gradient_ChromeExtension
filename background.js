//This javascript file handles message passing.
//Updated to properly use the chrome.scripting API
chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: applyGradient
    });
  });
  
  function applyGradient() {
    document.body.style.background = 'linear-gradient(to bottom, #8E44AD, #3498DB)';
  }
