let num01 = 5;
let num02 = 7;
let temporary;

/*-----APPROACH -01---------------
temporary = num01;
console.log(temporary);
num01 = num02;
console.log(num01);
num02 = temporary;
console.log(num02);
console.log(num01, num02);
---*/
/*--------------approach-02-------------*/

[num01, num02] = [num02, num01];
console.log(num01, num02);