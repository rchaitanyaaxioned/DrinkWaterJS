var glasses = document.querySelectorAll(".glass");
var mainContainer = document.querySelector('.main-container');
var emptyJar = document.querySelector(".empty-jar");
var fullJar = document.querySelector(".full-jar");

/*
var mCHeight = mainContainer.offsetHeight;
console.log("mCHeight : " + mCHeight);

var eJHeight = emptyJar.offsetHeight;
console.log("eJHeight : " + eJHeight);

var fJHeight = fullJar.offsetHeight;
console.log("fJHeight : " + fJHeight);

var eJHeightP = (eJHeight / mCHeight) * 100;
var emptyJarHeigth = eJHeightP.toFixed();
console.log("emptyJarHeigth : " + emptyJarHeigth);

var fJHeightP = (fJHeight / mCHeight) * 100;
var fullJarHeigth = fJHeightP.toFixed();
console.log("fullJarHeigth : " + fullJarHeigth);
*/

for (const glass of glasses) {
  glass.onclick = function () {
    glass.classList.toggle('glass-active');
    //fillWater();
  };
}

/*
var eJHeight = 100, fJHeight = 0;

function fillWater() {
  if (eJHeight == 100) {
    let setEJHeight = eJHeight - 12.5;
    emptyJar.style.height = setEJHeight + "%";
    console.log(setEJHeight + "%");
    let setFJHeight = fJHeight + 12.5;
    fullJar.style.height = setFJHeight + "%";
    console.log(setFJHeight + "%");
  }
}*/



/*
function fillWater() {
  if (emptyJarHeigth == 97) {
    emptyJarHeigth -= 12.125;
    emptyJar.style.height = emptyJarHeigth + "%";
    console.log("emptyJarHeigth : " + emptyJarHeigth);


    fullJarHeigth += 12.125;
    fullJar.style.height = fullJarHeigth + "%";
    console.log("fullJarHeigth : " + fullJarHeigth);

  }
}*/






















