const lyrics = "tmi bondhu kala pakhi. ami jeno kiiiiiiiiiii";
let parts = lyrics.split("");
// console.log(parts);

let words = lyrics.split(" ");
// console.log(words);

let sentences = lyrics.split(".");
// console.log(sentences);

/*----------the thing you will put inside the quotations it sill get cut and the split will there-----------------*/
// console.log( lyrics.split('i'));

/*-------------Slice--------------------*/
let slice = lyrics.slice(4, 11);
// console.log(slice);
// console.log(lyrics.slice(4,11));

let substring = lyrics.substring(4, 11);
// console.log(substring);

const lines = [
    "tmi bondhu",
    "kala pakhi.",
    "ami jeno kiiiiiiiiiii"
];
let join = lines.join(' ; ');
console.log(join);
