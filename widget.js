document.addEventListener("DOMContentLoaded", () => {
  const relBtn = document.getElementById("rel_btn");
  relBtn.addEventListener("click", () => {
    chrome.tabs.query({ currentWindow: true, active: true }, tab => {
      const msgObj = { id: tab[0].id, op: "WATCH_PAGE" };
      chrome.runtime.sendMessage(msgObj);
    });
  });
});
