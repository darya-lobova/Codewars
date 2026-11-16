function invert(array) {
  let array2 = [];
  for(let i = 0; i < array.length; i++){
    array2[i] = -array[i];
  }
   return array2;
}
