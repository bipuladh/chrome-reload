chrome.runtime.onMessage.addListener((req, sender, sendRes) => {
  if (req.op === "WATCH_PAGE") {
    setTimeout(() => chrome.tabs.reload(req.id), 2500);
    chrome.webNavigation.onErrorOccurred.addListener(lis => {
      if (lis.tabId === req.id) {
        setTimeout(() => chrome.tabs.reload(req.id), 5000);
      }
    });
  }
});
