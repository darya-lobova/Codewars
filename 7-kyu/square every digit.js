function squareDigits(num){
  
  let arr = [...num.toString()].map(Number);

  
  for (let i = 0; i < arr.length; i++){
    arr[i] = arr[i]*arr[i];
  }

  return +arr.join('');
}
