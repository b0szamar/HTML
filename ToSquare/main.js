function squareOrSquareRoot(array) {
    let arr=[];
    array.forEach(x => Math.sqrt(x,2)%1==0?arr.push(Math.sqrt(x,2)) : arr.push(Math.pow(x,2)));
    return arr;
  }