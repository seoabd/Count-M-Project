function countMs(text) {
    let caseCount = 0;
  for(let char of text){
    if(char == 'm' || char == 'M'){
      caseCount ++;
    }
  }
  return caseCount;
  }
