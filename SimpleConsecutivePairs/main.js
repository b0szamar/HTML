function pairs(tomb){
    let consecutive = 0;
    for(let i = 1; i < tomb.length; i += 2){
      if(Math.abs(tomb[i-1]-tomb[i]) == 1){
        consecutive++;
      }
    }
    
    return consecutive;
  };