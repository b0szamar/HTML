function repeats(array){
    return array.filter(v => array.indexOf(v) === array.lastIndexOf(v)).reduce((a,b) => a + b, 0);
  };