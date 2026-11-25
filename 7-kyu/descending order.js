function descendingOrder(n){
  let result = n
  .toString()
  .split('')
  .sort()
  .reverse()
  .join('');

  return Number(result);
}
