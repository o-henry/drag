/**
 * Inject drag into the current page
 */

document.addEventListener('mouseup', (event) => {
  let select = window.getSelection();
  document.designMode = 'on';

  document.execCommand('ForeColor', false, 'red');
  document.designMode = 'off';

  console.log('select', select.toString());

  if (select)
    chrome.runtime.onMessage(
      { message: 'text', data: select.toString() },
      function (response) {},
    );
});
