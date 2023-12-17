/*----------------------HIGHEST VALUE--------------------------------*/

let heightArray = [225, 130, 250, 60, 105, 261];

function highestHeight(height){
    let highest = height[0];
    for(i=0; i<height.length; i++){
        if(height[i] > highest) {
            highest = height[i];
        }
    }
    return highest;
}

console.log(highestHeight(heightArray));

/*--------------------LOWEST VALUE----------------------------*/

let heightArray02 = [225, 130, 250, 60, 105, 261];

function lowestHeight(height02){
    let lowest = height02[0];
    for(i=0; i<height02.length; i++){
        if(height02[i] < lowest) {
            lowest = height02[i];
        }
    }
    return lowest;
}

console.log(lowestHeight(heightArray02));