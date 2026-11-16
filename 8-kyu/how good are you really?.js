function betterThanAverage(classPoints, yourPoints) {
  let n = 0;
  let classSum = 0;
  for(let i = 0; i < classPoints.length; i++){
    classSum += classPoints[i];
    n++;
}
  let classAverage = (classSum + yourPoints) / (n + 1);
  
  return classAverage < yourPoints;
}
