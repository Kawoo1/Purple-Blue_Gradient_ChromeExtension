//This document allows the BUTTON to function. Applies the actual Gradient
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('applyGradient').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      const activeTab = tabs[0];
      chrome.runtime.sendMessage({ tabId: activeTab.id, action: "applyGradient" }, function(response) {
        if (response === 'success') {
          console.log('Gradient applied.');
        }
      });
    });
  });
});
