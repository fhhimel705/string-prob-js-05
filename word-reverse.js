const line = 'hello how are you all?';

function wordSplit(line){
    let split = line.split(' ');
    console.log(split);
    let result = [];
    for(i=split.length-1; i >=0; i--){
        console.log(split[i]);
        result.push(split[i]);
    }
    console.log(result);
}
wordSplit(line);