let randomNumberInput = document.querySelector("#random-number-input");
let checkButton = document.querySelector("#check-button");
let result = document.querySelector("#result");

const randomNumberFunction = () => {
  const randomNumber = Math.random();
  const roundedRandomNumber = Math.round(randomNumber * 5);

  console.log(randomNumberInput.value);
  console.log(roundedRandomNumber);

  if (Number(randomNumberInput.value) === roundedRandomNumber) {
    // console.log("you got it");
    result.innerHTML = "You got it";
  } else {
    // console.log("try again");
    result.innerHTML = "Try again";
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
