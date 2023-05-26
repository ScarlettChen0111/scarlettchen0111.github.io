let curseText = document.getElementById("curseText");
let curseButton = document.getElementById("curseButton");
let curseGreeting = document.getElementById("curseGreeting");
let curseLetterButton = document.getElementById("curseLetterButton");
let letter = document.getElementById("letter");

curseButton.addEventListener("click", cursePick);

function cursePick() {
  //clear page//
  curseText.innerHTML = "";
  //fetch link//
  curseLink = "CG-Curse.json";
  //New fetch//
  fetch(curseLink)
    .then((curse) => curse.json())
    .then((curseData) => {
      console.log(curseData);
      let min = 1;
      let max = Object.keys(curseData.Curse).length;
      let num = Math.floor(Math.random() * (max - min + 1)) + min;
      curseText.innerHTML += curseData["Curse"][`${num}`];
    })

    .catch((error) => {
      curseText.innerHTML += `🤷‍♀️：${error}`;
    });
}
