const dragging = () => {
  alert('hello ?');
  let content = window.getSelection();
  alert(content?.toString());
};

export { dragging };
