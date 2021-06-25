/* background is a service-worker, it's not persistent. */
chrome.runtime.onInstalled.addListener(() => {
  console.log('Hello');
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && /^http/.test(tab.url)) {
    chrome.scripting
      .executeScript({
        target: { tabId: tabId },
        files: ['./content/content.ts'],
      })
      .then(() => {
        console.log('INJECTED THE CONTENT SCRIPT');
      })
      .catch((err) => console.log(err));
  }

  console.log(tabId, changeInfo, tab);
});
