let numCounterEl = document.getElementById("num-counter");
let charOutputEl = document.getElementById("output");

let numCounter = 0;
//Input
document.getElementById("btn").addEventListener("click", btnClicked);
function btnClicked() {
  //Quesetion 1
  let answer1 = document.getElementById("q1").value.toLowerCase();

  //If Statement
  if (answer1 === "peter parker") {
    numCounter++
  } else {
    let numCounterEl.innerHTML = "Your score:0/4 (0%)" 
  }

  //Question 2
  let answer2 = document.getElementById("q2").value.toLowerCase();

  //If Statement
  if (answer2 === "iron man") {
    charOutputEl.innerHTML = numCounter++;
  } else {
    charOutputEl.innerHTML = "Your score:0/4 (0%)";
  }

  //Question 3
  let answer3 = document.getElementById("q3").value.toLowerCase();

  // If Statement
  if (answer3 === "vibranium") {
    charOutputEl.innerHTML = numCounter++;
  } else {
    charOutputEl.innerHTML = "Your socre:0/4 (0%)";
  }

  //Question 4
  let answer4 = document.getElementById("q4").value.toLowerCase();

  //If Statement
  if (answer4 === "tony stark") {
    charOutputEl.innerHTML = numCounter++;
  } else {
    charOutputEl.innerHTML = "Your socre:0/4 (0%)";
  }
}
