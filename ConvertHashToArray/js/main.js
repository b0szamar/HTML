function convertHashToArray(hash){
    let result = [];
    Object.keys(hash).sort().map(item => result.push([item,hash[item]]));
    return result;
  }