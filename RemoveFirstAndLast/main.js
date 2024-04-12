function array(a){
    return a.split(",").slice(1,-1).join(" ") || null;
  }