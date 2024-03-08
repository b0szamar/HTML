
// 1. feladat Leonardo numbers - Leonardo számok
L = (n, L0, L1, add) => {
    let array=[];
    if (n=>1) {
        array.push(L0)
    } 
    if (n>=2) {
        array.push(L1)
    }  
    for (let i = 2; i < n; i++) {
        let kovi=array[i-1]+array[i-2]+add;
        array.push(kovi)
        
    }
    return array;
}


console.log(L(5, 1, 1, 1), [1, 1, 3, 5, 9]);
console.log(L(5, 0, 0, 2), [0, 0, 2, 4, 8]);
console.log(L(5, 0, 0, 0), [0, 0, 0, 0, 0]);
console.log(L(10, 0, 1, 4), [0, 1, 5, 10, 19, 33, 56, 93, 153, 250]);


// 2. feladat Every nth array element - Minden n-edik tömbelem
function every(arr, interval, start) {
 let eredmeny=[];
 for (let i = start; i < arr.length; i+=interval) {
    eredmeny.push(arr[i]);
 }
 return eredmeny;
}

console.log(every([0, 1, 2, 3, 4]), [0, 1, 2, 3, 4]);
console.log(every([0, 1, 2, 3, 4], 1), [0, 1, 2, 3, 4]);
console.log(every([0, 1, 2, 3, 4], 2), [0, 2, 4]);
console.log(every([0, 1, 2, 3, 4], 3), [0, 3]);
console.log(every([0, 1, 2, 3, 4], 3, 1), [1, 4]);




// 3. feladat Odd Ones Out! - Páratlanok!
function oddOnesOut(nums) {
    let db=[];
    for(let szamok of nums){
        db[szamok]=(db[szamok]||0)+1
    }
    let eredmeny2=[];
    for(let szamok of nums){
        if (db[szamok]%2==0) {
            eredmeny2.push(szamok)
        }
    }
    return eredmeny2;
}

console.log(oddOnesOut([1, 2, 3, 1, 3, 3]), [1, 1]);
console.log(oddOnesOut([75, 68, 75, 47, 68]), [75, 68, 75, 68]);
console.log(oddOnesOut([42, 72, 32, 4, 94, 82, 67, 67]), [67, 67]);
console.log(oddOnesOut([100, 100, 5, 5, 100, 50, 68, 50, 68, 50, 68, 5, 100]), [100, 100, 100, 100]);
console.log(oddOnesOut([82, 86, 71, 58, 44, 79, 50, 44, 79, 67, 82, 82, 55, 50]), [44, 79, 50, 44, 79, 50]);