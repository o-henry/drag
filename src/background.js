/* background is a service-worker, it's not persistent. */
chrome.runtime.onInstalled.addListener(() => {
  console.log('Chrome extension successfully installed');
});

// chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
//   if (changeInfo.status === 'complete' && /^http/.test(tab.url)) {
//     chrome.scripting
//       .executeScript({
//         target: { tabId: tabId },
//         files: ['./src/content/content-script.js'],
//       })
//       .then(() => {
//         console.log('INJECTED THE CONTENT SCRIPT');
//       })
//       .catch((err) => console.error(err));
//   }
// });

chrome.runtime.onConnect.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['./src/content/content-script.js'],
  });
});
