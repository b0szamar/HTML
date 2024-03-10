function every(arr, interval, start){
    let tomb = [];
    
    for(let i = start || 0; i < arr.length; i += interval || 1){
      tomb.push(arr[i]);
    }
    
    return tomb;
}