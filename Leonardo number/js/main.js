let l0=1
let l1=2
let n=5;
let add=8;
let temp=0;
console.log(l0);
console.log(l1);
for (let i = 0; i < n-2; i++) {
    temp=l0+l1+add;
    console.log(temp);
    l0=l1;
    l1=temp;
    
}