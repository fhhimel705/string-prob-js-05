const lyrics = 'tmi bondhu kala pakhi. ami jeno kiiiiiiiiiii';

let searchString = 'kala';
// console.log(lyrics.includes(searchString));
// console.log(lyrics.includes('kala'));

// console.log(lyrics.includes('Tmi'.toLowerCase()));

const lyrics02 = 'boshonto kaLe Tomay bolte parini';
let searchString02 = 'kalE'.toLowerCase();
// console.log(searchString02);
// console.log(lyrics02.toLowerCase().includes(searchString02));

// console.log(lyrics02.toLowerCase().includes('Kale'.toLowerCase()));

/*---------------INDEX OFF------------------------*/
// console.log(lyrics02.indexOf('kaLe'));

if(lyrics02.toLowerCase().indexOf('kale') !== -1){
    console.log('exist in the string');
}
else{
    console.log('doesnt exist');
}

/*----------------STARTS WITH-------------------*/
console.log(lyrics02.startsWith("boshonto"));

/*---------------ENDS WITH-------------------*/
let file = 'img-022.png';
console.log(file.endsWith('.png'));




