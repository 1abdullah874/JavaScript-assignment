/*
Module 1.1

console.log("I'm printing to console!")
 */
/*
Module 1.2

let p1 = prompt("Enter your name ");
object = document.getElementById("target0")
object.innerHTML = "Moi, " + p1 + "!!";

 */
/* Module 1.3

let x = parseInt(prompt("Enter Integer Number 1"));
let y = parseInt(prompt("Enter Integer Number 2"));
let z = parseInt(prompt("Enter Integer Number 3"));
sum = x + y + z
avg = sum / 3
prdct = x * y * z

document.querySelector('#target1').innerHTML  = ("this is the sum of the Numbers: " + sum)
document.querySelector('#target2').innerHTML  = ("this is the average of the numbers: " + avg)
document.querySelector('#target3').innerHTML  = ("this is the product of the numbers: "  + prdct)
*/
/* Module 1.4

function studentsorting() {
  const name = prompt("Hey there!!, Enter your name.");

  const housenum = Math.floor(Math.random() * 4)+1;
  let house;
  switch (housenum) {
    case 1:
      house = "GRYFFINDOR";
      break;
    case 2:
      house = "SLYTHERIN";
      break;
    case 3:
      house = "HUFFLEPUFF";
      break;
    case 4:
      house = "RAVENCLAW";
      break;
    default:
      house = "NO HOUSE ASSIGNED";

  }
  document.getElementById('target4').textContent = `${name}, CONGRATS, YOU ARE ${house}.`;
}
studentsorting()

 */
/* Module 1.5



function Isleapyear(){

  const year = prompt("Enter Year you want to check")
  let message;

  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    message = `${year} is a leap year.`;
  } else {
    message = `${year} is not a leap year.`;
  }
  document.getElementById("target5").textContent = message;
}

Isleapyear()\

 */
















