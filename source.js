let counter = 0;

function magic() {
  let num1 = Math.floor(Math.random() * 6) + 1; 
  let num2 = Math.floor(Math.random() * 6) + 1;

  let dice_1 = document.getElementById("dice_1"); 
  let dice_2 = document.getElementById("dice_2"); 

  dice_1.src = num1 + ".png";
  dice_2.src = num2 + ".png";

  let para = document.getElementById("result");

  if (num1 === num2) {
    dice_1.className = "animate__animated animate__bounce animate__infinite";
    dice_2.className = "animate__animated animate__bounce animate__infinite";

    dice_1.style.backgroundColor = "green";
    dice_2.style.backgroundColor = "green";

    para.innerHTML = "איזה כיף יצא לך דאבל";

    if (num1 === 6) {
      para.innerHTML = "איזה כיף יצא לך שש שש";
    }

    counter++;
  } else {
    dice_1.className = "";
    dice_2.className = "";

    dice_1.style.backgroundColor = "gray";
    dice_2.style.backgroundColor = "gray";

    para.innerHTML = "לא נורא נסה שוב";
  }

  let counter_msg = document.getElementById("counter");

  counter_msg.innerHTML = "כמות הפעמים שיצא לך דאבל היא : " + counter;
}
