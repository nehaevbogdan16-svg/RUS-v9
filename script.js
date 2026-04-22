document.addEventListener("submit", (e) => {
  if (e.target.tagName === "FORM") {
    e.preventDefault();
    alert("Заявка отправлена");
    e.target.reset();
  }
});