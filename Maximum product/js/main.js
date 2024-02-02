let numbers=[1,2,3,4,5,6,7,8,9,10]
function MaximumProduct(numbers){
    let max=-Infinity;
    for (let i = 1; i < numbers.length; i++) {
        let szam=numbers[i-1]*numbers[i];
        if (szam>max) {
            max=szam;
        }
    }
    return max;
}
console.log(MaximumProduct(numbers))