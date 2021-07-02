/**
 * Inject drag into the current page
 */

document.addEventListener('mouseup', (event) => {
  let select = window.getSelection().toString();

  if (select.length)
    chrome.runtime.sendMessage(
      { message: 'text', data: select },

      // function (response) {
      //   console.log('response', response);
      // },
    );
});
