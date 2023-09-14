let randomNumberInput = document.querySelector("#random-number-input");
let checkButton = document.querySelector("#check-button");
let result = document.querySelector("#result");
// let finalRandomNumber = document.querySelector("#final-random-number")
let body = document.querySelector("body");

const randomNumberFunction = () => {
  const randomNumber = Math.random();
  const roundedRandomNumber = Math.round(randomNumber * 5);

  console.log(randomNumberInput.value);
  console.log(roundedRandomNumber);

  if (Number(randomNumberInput.value) === roundedRandomNumber) {
    // console.log("you got it");
    // result.innerHTML = `You got it ${roundedRandomNumber}`;
    result.innerHTML = `You got it`;
    body.classList.add("correct");
  } else {
    // console.log("try again");
    // result.innerHTML = `Try again ${roundedRandomNumber}`;
    result.innerHTML = `Try again`;
    body.classList.remove("correct");
    body.classList.add("error");
  }
};

checkButton.addEventListener("click", function () {
  randomNumberFunction();
  randomNumberInput.value = "";
});

document.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    randomNumberFunction();
    randomNumberInput.value = "";
  }
});
