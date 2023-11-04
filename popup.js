//This document allows the BUTTON to function. Applies the actual Gradient
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('applyGradient').addEventListener('click', () => {
    chrome.scripting.executeScript({
      target: { tabId: chrome.tabs.Tab.tabId },
      function: applyGradient
    });
  });

  function applyGradient() {
    document.body.style.background = 'linear-gradient(to bottom, #8E44AD, #3498DB)';
  }
});
