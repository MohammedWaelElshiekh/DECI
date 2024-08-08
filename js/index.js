(function () {
  const buttons = document.querySelectorAll(".stockElement form input");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      alert("works");
    });
  });
})();
