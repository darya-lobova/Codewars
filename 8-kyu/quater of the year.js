const quarterOf = (month) => {
  let quater = 0;
  if(month >= 1 && month <= 3){
    quater = 1;
  }
  else if(month >= 4 && month <= 6){
    quater = 2;
  }
  
  else if(month >= 7 && month <= 9){
    quater = 3;
  }
  
  else if(month >= 10 && month <= 12){
    quater = 4;
  }
  
  return quater;
  
}
