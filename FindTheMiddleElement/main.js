
function gimme(x) {
    return x.indexOf(x.concat().sort(function(x, y) { return x - y })[1])
  }