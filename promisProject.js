const randomColor = function () {
  let hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
// console.log(randomColor());
let intervalID;

let StartChangingColor = function () {
  let ChangeBgColor = () => {
    document.body.style.backgroundColor = randomColor();
  };

  if (!intervalID) {
    intervalID = setInterval(ChangeBgColor, 1000);
  }
};

let StopChangingColor = function () {
  clearInterval(intervalID);
  intervalID = null;
  //   document.body.style.backgroundColor = "black";
};
document.querySelector("#start").addEventListener("click", StartChangingColor);
document.querySelector("#stop").addEventListener("click", StopChangingColor);
