/* background is a service-worker, it's not persistent. */
chrome.runtime.onInstalled.addListener(() => {
  console.log('Chrome extension successfully installed');
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  switch (request.message) {
    case 'text':
      window.selText = request.data;
      break;
    default:
      sendResponse({ data: 'Invalid Arguments' });
      break;
  }
});
