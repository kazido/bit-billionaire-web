const needsPrevented = ["/"];

document.addEventListener("keydown", (e) => {
  // GLOBAL PREVENT KEYS
  if (needsPrevented.includes(e.key)) {
    e.preventDefault();
  }
});
