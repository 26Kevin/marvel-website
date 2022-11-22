let numCounterEl = document.getElementById("num-counter");
let charOutputEl = document.getElementById("output");
let numPercentEl = document.getElementById("num-percent");



//Input
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  let numCounter = 0;
let numPercent = 0;
  //Quesetion 1
  let answer1 = document.getElementById("q1").value.toLowerCase();

  //If Statement
  if (answer1 === "peter parker") {
    numCounter += 1;
    numPercent += 25;
  } else {
    numCounter = numCounter;
    numPercent = numPercent;
  }

  //Question 2
  let answer2 = document.getElementById("q2").value.toLowerCase();

  //If Statement
  if (answer2 === "iron man") {
    numCounter += 1;
    numPercent += 25;
  } else {
    numCounter = numCounter;
    numPercent = numPercent;
  }

  //Question 3
  let answer3 = document.getElementById("q3").value.toLowerCase();

  // If Statement
  if (answer3 === "vibranium") {
    numCounter += 1;
    numPercent += 25;
  } else {
    numCounter = numCounter;
    numPercent = numPercent;
  }

  //Question 4
  let answer4 = document.getElementById("q4").value.toLowerCase();

  //If Statement
  if (answer4 === "tony stark") {
    numCounter += 1;
    numPercent += 25;
  } else {
    numCounter = numCounter;
    numPercent = numPercent;
  }

  
  //Output
  document.getElementById("num-counter").innerHTML = numCounter;
  document.getElementById("num-percent").innerHTML = numPercent;
}
