let height = [167, 190, 120, 165, 230];

function tallestHight(height) {
  let largest = height[0];
  for (i = 0; i < height.length; i++) {
    if(height[i] > largest){
        largest = height[i];
    }
  }
  return largest;
}

console.log(tallestHight(height));
