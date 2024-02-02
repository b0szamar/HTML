let number=[0,1]
let n=9;
function Fibonacci(number){
    let szam;
    for (let i = 1; i < n; i++) {
        szam=number[i-1]+number[i]
        number.push(szam);
    }
    return number

}
console.log(Fibonacci(number))