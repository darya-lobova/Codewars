function findNeedle(haystack) {
  let position;
  for(let i = 0; i < haystack.length; i++){
    if(haystack[i] === "needle"){
      position = i;
    }
  }
  let message = `found the needle at position ${position}`;
  return message;
}
