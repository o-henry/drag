/* background is a service-worker, it's not persistent. */
chrome.runtime.onInstalled.addListener(() => {
  console.log('Chrome extension successfully installed');
});

let selected = null;

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log('request', request);

  switch (request.message) {
    case 'text':
      window.selected = request.data;
      // console.log('data', request.data);
      // sendResponse({ data: 'Good, Thank you' });
      break;
    default:
      sendResponse({ data: 'Invalid Arguments' });
      break;
  }
});
