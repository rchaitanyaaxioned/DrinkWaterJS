var glassList = document.querySelector(".glass-list");
var glasses = document.querySelectorAll(".glass");
var mainContainer = document.querySelector('.main-container');
var emptyJar = document.querySelector(".empty-jar");
var fullJar = document.querySelector(".full-jar");
var percentage = document.querySelector(".percentage");
var liters = document.querySelector(".liters");

// var getLiters = document.querySelector(".liters").textContent;
// console.log("liters : " + getLiters);

var eJHeight = emptyJar.clientHeight;
var fJHeight = fullJar.clientHeight;

var emptyHeight = (eJHeight / eJHeight) * 100;
var fullHeight = (fJHeight / eJHeight) * 100;

var glassIndex;

glasses.forEach((item, index) => {
  item.addEventListener("click", () => {
    //To remove glass-active if present before
    if (glasses[index].classList.contains("glass-active")) {
      //To remove glass-active from glass next glasses selected
      for (let j = index; j < 8; j++) {
        glasses[j].classList.remove("glass-active");
        glassIndex = index; //For multuplying with height in fillWater();
        fillWater();
      }
    } else {
      for (let i = 0; i <= index; i++) {
        glasses[i].classList.add("glass-active");
        glassIndex = index + 1; //For multuplying with height in fillWater();
        fillWater();
      }
    }
  });
});

function fillWater() {
  let eHeight = emptyHeight - (12.5 * glassIndex);
  emptyJar.style.height = eHeight + "%";
  let remainingLiters = 2 - (0.25 * glassIndex);
  liters.innerHTML = remainingLiters + "L";
  console.log(eHeight + "%");
  if (eHeight == 0) {
    emptyJar.style.opacity = 0;
  } else {
    emptyJar.style.opacity = 1;
  }

  let fHeight = fullHeight + (12.5 * glassIndex);
  fullJar.style.height = fHeight + "%";
  percentage.innerHTML = fHeight + "%";
  console.log(fHeight + "%");
  if (fHeight == 0) {
    fullJar.style.opacity = 0;
  } else {
    fullJar.style.opacity = 1;
  }
}