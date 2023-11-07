//This document allows the BUTTON to function. Applies the actual Gradient
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('applyGradient').addEventListener('click', () => {
    applyGradient();
  });

  document.getElementById('removeGradient').addEventListener('click', () => {
    removeGradient();
  });
});

function applyGradient() {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    const activeTab = tabs[0];
    chrome.runtime.sendMessage({ tabId: activeTab.id, action: "applyGradient" }, function(response) {
      if (response && response.message === 'Gradient applied successfully') {
        console.log('Gradient applied successfully.');
      } else {
        console.error('Failed to apply the gradient.');
      }
    });
  });
}

function removeGradient() {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    const activeTab = tabs[0];
    chrome.runtime.sendMessage({ tabId: activeTab.id, action: "removeGradient" }, function(response) {
      if (response && response.message === 'Gradient removed successfully') {
        console.log('Gradient removed successfully.');
      } else {
        console.error('Failed to remove the gradient.');
      }
    });
  });
}
