/*------------to the power----------*/

let power = Math.pow(3, 3);
// console.log(power);

/*--------------gap diffrence-------------*/
let num01 = 25;
let num02 = 30;
let gap = Math.abs(num01 - num02);

if(gap > 3){
    // console.log('dont approach');
}
else if (gap < 3)
{
    // console.log('approach');
}

/*--------------------ROUND FIGURE--------------------*/    

let round = Math.round(4.45);
// console.log(round);

let ceil = Math.ceil(4.45);
// console.log(ceil);

let floor = Math.floor(5.9999);
// console.log(floor);

/*-----------------------RANDOM----------------*/

let random = Math.random()*6;
console.log(Math.round(random));
