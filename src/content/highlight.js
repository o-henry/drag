/**
 * Inject drag into the current page
 */
document.addEventListener('mouseup', () => {
  let select = window.getSelection
    ? window.getSelection()
    : document.selection.createRange();

  /** 'execCommand' this feature is obsolete but
   * https://github.com/yabwe/medium-editor/blob/master/src/js/core.js#L47
   * https://github.com/codex-team/editor.js/blob/master/src/components/inline-tools/inline-tool-bold.ts#L73
   * https://imgur.com/a/Y90otfU
   * are using it.
   * */

  if (select) {
    let select_position = select.getRangeAt(0).startOffset;

    console.log(select.getRangeAt(0));

    document.designMode = 'On';
    document.execCommand('hiliteColor', false, '#FFF28C');

    if (select.getRangeAt(0).startOffset === select_position) {
      document.execCommand('RemoveFormat', false, null);
    }

    document.designMode = 'Off';
  }

  if (select.toString().length) {
    chrome.runtime.sendMessage({ message: 'text', data: select.toString() });
    setCookie('highlight', select.toString(), 7);
  }
});

/**
 * background
 * let range = select.getRangeAt(0);
 * let span = document.createElement('span');
 * span.className = 'highlight';
 * range.surroundContents(span);
 */
