/* Module 2.1



function reversnum(){
  n1 = Number(prompt("enter your number 1"))
  n2 = Number(prompt("enter your number 2"))
  n3 = Number(prompt("enter your number 3"))
  n4 = Number(prompt("enter your number 4"))
  n5 = Number(prompt("enter your number 5"))

  const Num = []

  num.push(n1)
  num.push(n2)
  num.push(n3)
  num.push(n4)
  num.push(n5)

  console.log(number[4])
  console.log(number[3])
  console.log(number[2])
  console.log(number[1])
  console.log(number[0])

}
reversnum()
console.log(num)

 */
/* Module 2.2

 function numofparts(){
   const participants = Number(prompt("Enter the number of participants"))
   let participant = []

  for (let i = 0; i < participants; i++){
    const name = prompt("Enter the names of the participants" + (i + 1)+ ":");

    if (name){
      participants.push(name)
    }else {
      document.getElementById("target7").innerHTML = 'Invalid Input';
      return
    }
  }
  let list = "<ol>"
    for (let i = 0; i < participants.length; i++) {
      list += "<li>" + participants[i] + "</li>"
    }

  document.getElementById("target7").innerHTML = list;

}

numofparts()
*/
/* Module 2.3
let dogNames = [];
for (let i = 0; i < 6; i++) {
  dogNames.push(prompt(`Enter the name of dog ${i + 1}:`));
}


dogNames.sort((a, b) => b.localeCompare(a));


let ul = document.createElement("ul");


dogNames.forEach(name => {
  let li = document.createElement("li");
  li.textContent = name;
  ul.appendChild(li);
});


document.body.appendChild(ul);

 */
/* Module 2.4
let numbers = [];
let input;


do {
    input = prompt("Enter a number (enter 0 to finish):");
    const number = parseFloat(input);
    if (number !== 0) {
        numbers.push(number);
    }
} while (input !== "0");


numbers.sort((a, b) => b - a);


console.log("Numbers from largest to smallest:");
console.log(numbers);
*/
/* Module 2.5
let numbers = [];
let input;


function hasDuplicate(num) {
    return numbers.includes(num);
}


while (true) {
    input = prompt("Enter a number (or a duplicate number to stop):");
    const number = parseFloat(input);


    if (!isNaN(number))
        if (hasDuplicate(number)) {
            console.log(`The number ${number} has already been given. Stopping the operation.`);
            break;
        } else {
            numbers.push(number); y
        }
     else {
        console.log("Please enter a valid number.");
    }
}


numbers.sort((a, b) => a - b);


console.log("Given numbers in ascending order:");
console.log(numbers);

 */