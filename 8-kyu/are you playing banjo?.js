function areYouPlayingBanjo(name) {
  
  let result = name;
  if(name[0] === 'R' || name[0] === 'r'){
    result+=" plays banjo";
  }
  else{
    result+=" does not play banjo";
  }
  return result;
}
