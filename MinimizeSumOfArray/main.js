function minSum(arr) {
    return arr.sort( (x,y) => x-y )
              .slice(0, arr.length/2)
              .reduce( (acc,curr,index) => acc += curr * arr[ arr.length - index - 1 ], 0 )
  }