chrome.commands.onCommand.addListener((command) => {
  chrome.tabs.query({ url: "https://github.com/*" }, (tabs) => {
    if (tabs.length === 0) {
      return;
    }
    chrome.windows.update(tabs[0].windowId, { focused: true });
    chrome.tabs.update(tabs[0].id, { active: true });
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      func: () => {
        document.querySelector(".header-search-input").focus();
      },
    });
  });
});
