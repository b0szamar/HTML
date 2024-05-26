function diff(a, b){
    var tomb=[];
    for (var i=0; i<a.length; ++i)
      if (b.indexOf(a[i])==-1 && tomb.indexOf(a[i])==-1)
        tomb.push(a[i]);
    for (var i=0; i<b.length; ++i)
      if (a.indexOf(b[i])==-1 && tomb.indexOf(b[i])==-1)
        tomb.push(b[i]);
    tomb.sort();
    return tomb;
  }