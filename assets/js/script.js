var glasses = document.querySelectorAll(".glass");
var mainContainer = document.querySelector('.main-container');
var emptyJar = document.querySelector(".empty-jar");
var fullJar = document.querySelector(".full-jar");

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
}
*/

/*
var mCHeight = mainContainer.offsetHeight;
//361
console.log("mCHeight : " + mCHeight); 

var eJHeight = emptyJar.offsetHeight;
console.log("eJHeight : " + eJHeight); //351

var fJHeight = fullJar.offsetHeight;
console.log("fJHeight : " + fJHeight); //0

var eJHeightP = (eJHeight / mCHeight) * 100;
var emptyJarHeigth = eJHeightP.toFixed(); //97
console.log("emptyJarHeigth : " + emptyJarHeigth);

var fJHeightP = (fJHeight / mCHeight) * 100;
var fullJarHeigth = fJHeightP.toFixed(); //0
console.log("fullJarHeigth : " + fullJarHeigth);
*/

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






















