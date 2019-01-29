onSubmit = e => {
  const author = e;
  document.getElementById("my-form").reset();
  authorInfo(author);
  return false;
};
