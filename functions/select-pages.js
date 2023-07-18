const numSelect = document.querySelectorAll(".num__select > p");
const aboutP = document.querySelectorAll(".about__p");

for (let i = 0; i < numSelect.length; i++) {
    let count;
  numSelect[i].addEventListener("click", function () {
    let numValue = parseInt(numSelect[i].textContent);
    if(numValue === i + 1) {
        count = numValue
    }
    
  });

}
