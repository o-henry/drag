// 팝업 차단
window.addEventListener('load', () => {
  if (window.opener && !window.opener.closed) {
    window.close();
  }
});
