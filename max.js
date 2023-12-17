/*---------*/
let maxnumber = Math.max(11, 12, 13, 19);
// console.log(maxnumber);

/*-----------------*/

let ritu = 25;
let mitu = 35;
let chitu = 45;

function highestNum(num1, num2, num3){
    if (num1 > num2 && num1 > num3) {
      console.log("ritu got the highest marks");
    } else if (num2 > num1 && num2 > num3) {
      console.log("mitu got the highest marks");
    } else {
      console.log("chitu got the highest marks");
    }
}
highestNum(ritu, mitu, chitu);
