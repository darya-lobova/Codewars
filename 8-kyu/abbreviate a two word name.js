function abbrevName(name){
 let initial1;
  let initial2;
    for(let i = 0; i < name.length; i++){
      if(i === 0){
        initial1 = name[i].toUpperCase();
      }
      else if(name[i] === " "){
        initial2 = name[i+1].toUpperCase();
      }
    }
  let initials = `${initial1}.${initial2}`;
  return initials;

}
