var glassList = document.querySelector(".glass-list");
var glasses = document.querySelectorAll(".glass");
var mainContainer = document.querySelector('.main-container');
var emptyJar = document.querySelector(".empty-jar");
var fullJar = document.querySelector(".full-jar");
var percentage = document.querySelector(".percentage");

var eJHeight = emptyJar.clientHeight;
var fJHeight = fullJar.clientHeight;

var emptyHeight = (eJHeight / eJHeight) * 100;
var fullHeight = (fJHeight / eJHeight) * 100;

var glassIndex;

glasses.forEach((item, index) => {
  item.addEventListener("click", () => {
    //glassIndex = index + 1; //For multuplying with height below
    //To remove glass-active if present before
    if (glasses[index].classList.contains("glass-active")) {
      //To remove glass-active from glass next glasses selected
      for (let j = index; j < 8; j++) {
        glasses[j].classList.remove("glass-active");
        glassIndex = index;
        fillWater();
      }
    } else {
      for (let i = 0; i <= index; i++) {
        glasses[i].classList.add("glass-active");
        glassIndex = index + 1;
        fillWater();
      }
    }
  });
});

function fillWater() {
  let eHeight = emptyHeight - (12.5 * glassIndex);
  emptyJar.style.height = eHeight + "%";
  console.log(eHeight + "%");

  let fHeight = fullHeight + (12.5 * glassIndex);
  fullJar.style.height = fHeight + "%";
  percentage.innerHTML = fHeight + "%";
  console.log(fHeight + "%");
}