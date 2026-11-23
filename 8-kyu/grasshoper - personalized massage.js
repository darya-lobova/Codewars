function greet (name, owner) {
  let greeting = 'Hello ';
  
  if(name === owner){
    greeting+='boss';
  }
  else{
    greeting+='guest';
  }
  
  return greeting;
}
