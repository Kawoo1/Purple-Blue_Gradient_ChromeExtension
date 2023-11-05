//This javascript file handles message passing.
chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: applyGradient
    });
  });
  
  function applyGradient() {
    document.body.style.background = 'linear-gradient(to bottom, #8E44AD, #3498DB)';
  }
  