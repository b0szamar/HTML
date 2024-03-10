var func = function(item){
    return Number(item) % 2 === 0;
 }
 
 function map(tomb, somefunction){
   if (typeof somefunction !== 'function') return 'given argument is not a function';
   if (!tomb.length) return 'tombay should contain only numbers';
 
   var eredmeny = [];
   for(var i = 0; i< tomb.length; i++) {
     if (isNaN(tomb[i])) return 'tombay should contain only numbers';
     eredmeny.push(somefunction(tomb[i]));
   }
   
   return eredmeny;
 }