function getGrade (s1, s2, s3) {
  let avg=(s1+s2+s3)/3;
  let result='';
  
  if(avg >= 90 && avg <= 100){
    result+='A';
  }
  else if(avg >= 80 && avg < 90){
    result+='B';
  }
  else if(avg >= 70 && avg < 80){
    result+='C';
  }
  else if(avg >= 60 && avg < 70){
    result+='D';
  }
  else if(avg >= 0 && avg < 60){
    result+='F';
  }
  return result;
}
