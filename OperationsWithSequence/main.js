var calc = function(a) {
    var ossz=0;
    for (var i=0; i<a.length; ++i)
    {
      if (a[i]>0) a[i]*=a[i];
      if (i%3==2) a[i]*=3;
      if (i%5==4) a[i]*=-1
      ossz+=a[i];
    }
    return ossz;
  }