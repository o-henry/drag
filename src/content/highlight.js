/**
 * Inject drag into the current page
 */
document.addEventListener('mouseup', () => {
  let select = window.getSelection
    ? window.getSelection()
    : document.selection.createRange();

  if (select) {
    /* this feature is obsolete but
     * https://github.com/yabwe/medium-editor/blob/master/src/js/core.js#L47
     * https://github.com/codex-team/editor.js/blob/master/src/components/inline-tools/inline-tool-bold.ts#L73
     * https://imgur.com/a/Y90otfU
     * are using it.
     * */

    window.document.designMode = 'On';
    window.document.execCommand('hiliteColor', false, 'yellow');
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
