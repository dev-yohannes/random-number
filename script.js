const body = document.querySelector("body");
const container = document.querySelector(".container");
const userNumberInput = document.querySelector("#user-number-input");
const checkButton = document.querySelector("#check-button");
const resultText = document.querySelector("#result-text");
// const tryCounter = document.querySelector("#try-counter");

//
// functions
//
const checking = () => {
  // setting up random number
  const roundedRandomNumber = Math.round(Math.random() * 5);

  if (userNumberInput.value === "") {
    alert("Please enter a numeric value");
  } else {
    // changing the input to number type
    const numberedRandomNumberInput = Number(userNumberInput.value);

    if (numberedRandomNumberInput === "") {
      alert("Please enter a numeric value");
    }

    if (numberedRandomNumberInput === roundedRandomNumber) {
      resultText.innerHTML = "You got it";
      container.classList.add("correct");
    } else {
      resultText.innerHTML = "Try again";
      container.classList.remove("correct");
      container.classList.add("error");
    }

    // console.log("user number -- ", numberedRandomNumberInput);
    // console.log("random number -- ", roundedRandomNumber);
  }
};

//
// event listeners
//
checkButton.addEventListener("click", function () {
  checking();
  userNumberInput.value = "";
});

document.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    checking();
    userNumberInput.value = "";
  }
});
