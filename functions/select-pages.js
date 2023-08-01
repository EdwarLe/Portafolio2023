const numSelect = document.querySelectorAll(".num");
const aboutP = document.querySelectorAll(".about__p");

numSelect.forEach((num) => {
  num.addEventListener("click", () => {
    numSelect.forEach((numItem) => {
      numItem.classList.remove("select");
      aboutP.forEach((text) => {
        text.classList.add("about__hiden");
      });
    });
    num.classList.add("select");
    aboutP.forEach((text) => {
      if (num.classList.contains("select")) {
        text.classList.remove("about__hiden");
      }
    });
  });
});
