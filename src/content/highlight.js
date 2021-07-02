/**
 * Inject drag into the current page
 */

document.addEventListener('mouseup', () => {
  let select = window.getSelection().toString();

  if (select.length) {
    chrome.runtime.sendMessage({ message: 'text', data: select });
    setCookie('highlight', select, 7);
  }
});
