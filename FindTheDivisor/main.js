function divisors(integer) {
    var result = [];
    for (var a = 2; a*a <= integer; ++a) {
      if (integer%a == 0) {
        var b = integer/a;
        result.push(a);
        if (b != a) {
          result.push(b);
        }
      }
    }
    if (result.length == 0) {
      return integer+' is prime';
    }
    result.sort(function (a, b) {
      return a - b;
    });
    return result;
  };