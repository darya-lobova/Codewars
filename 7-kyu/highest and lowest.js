function highAndLow(numbers){
  
  const numberArrSorted = numbers
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

  let min = numberArrSorted[0];
  let max = numberArrSorted[numberArrSorted.length - 1];
  
  return `${max} ${min}`;
 
}
