const body = document.querySelector("body");
const container = document.querySelector(".container");
const userNumberInput = document.querySelector("#user-number-input");
const checkButton = document.querySelector("#check-button");
const retryButton = document.querySelector("#retry");
const resultText = document.querySelector("#result-text");
const tryCounter = document.querySelector("#try-counter");
const score = document.querySelector("#score");

// --------functions --------
const checking = () => {
  // setting up random number
  const roundedRandomNumber = Math.round(Math.random() * 5);

  scoreCounter = 1;

  if (userNumberInput.value === "") {
    alert("Please enter a numeric value");
  } else {
    // changing the input to number type
    const numberedRandomNumberInput = Number(userNumberInput.value);

    if (numberedRandomNumberInput === "") {
      alert("Please enter a numeric value");
    } else if (numberedRandomNumberInput === roundedRandomNumber) {
      resultText.innerHTML = "You got it";
      container.classList.add("correct");
      scoreCounter++;
    } else {
      resultText.innerHTML = "Try again";
      container.classList.remove("correct");
      container.classList.add("error");
    }
    console.log("user number -- ", numberedRandomNumberInput);
    console.log("random number -- ", roundedRandomNumber);
  }
};

// const scoreValue = () => {
//   // console.log(container.classList);
//   if (container.className.includes("correct")) {
//     // console.log("correct value");
//     score.innerHTML = `You got: ${scoreCounter++}/5`;
//     // console.log(`You got: ${scoreCounter++}/5`);
//   }
// };

counter = 1;

const counterFunction = () => {
  if (counter <= 5) {
    tryCounter.innerHTML = `Tries: ${counter++}/5`;
  } else {
    tryCounter.innerHTML = "Sorry you've reached a maximum tries";
    score.innerHTML = `You got: ${scoreCounter}/5`;
    checkButton.disabled = true;
    userNumberInput.disabled = true;
    resultText.innerHTML = "";
    checkButton.classList.add("display-none-check-button");
    retryButton.classList.remove("display-none-retry-button");
  }
  // scoreValue();
};

// -------- event listeners --------
checkButton.addEventListener("click", function () {
  checking();
  counterFunction();
  // scoreValue();
  userNumberInput.value = "";
  // userNumberInput.autofocus = true;
});

document.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    checking();
    counterFunction();
    // scoreValue();
    userNumberInput.value = "";
  }
});

retryButton.addEventListener("click", function () {
  container.classList.remove("correct");
  container.classList.remove("error");
  tryCounter.innerHTML = "";
  score.innerHTML = "";
  checkButton.disabled = false;
  userNumberInput.disabled = false;
  checkButton.classList.remove("display-none-check-button");
  retryButton.classList.add("display-none-retry-button");
  counter = 1;
});
