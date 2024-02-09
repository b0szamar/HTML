// All or Nothing
function possiblyPerfect(key,answers) {
    let igaz=0;
    let hamis=0;
    for (let i = 0; i < key.length; i++) {
        if(key[i]==answers[i]){
            igaz++;
        }
        else if(key[i]=="_"){
            igaz++;
            hamis++;
        }
        else{
            hamis++;
        }
    
    }
    if(igaz==key.length || hamis==key.length){
        console.log("true")
    }
    else{
        console.log("false")
    }
    
}



console.log(possiblyPerfect([..."A_C_B"],[..."ADCEB"]) + " >> true ");
console.log( possiblyPerfect([..."B_B"],[..."BDC"]) + " >> false ");
console.log( possiblyPerfect([..."T_FFF"],[..."FFTTT"]) + " >> true ");
console.log( possiblyPerfect([..."BA__"],[..."BACC"]) + " >> true ");
console.log( possiblyPerfect([..."ABA_"],[..."BACC"]) + " >> true ");
console.log( possiblyPerfect([..."ABC_"],[..."BACC"]) + " >> false ");
console.log( possiblyPerfect([..."B_"],[..."CA"]) + " >> true ");
console.log( possiblyPerfect([..."BA"],[..."CA"]) + " >> false ");
console.log( possiblyPerfect([..."B"],[..."B"]) + " >> true ");
console.log( possiblyPerfect([..."_T__"],[..."TFFF"]) + " >> true ");
console.log( possiblyPerfect([..."_T__"],[..."TTFT"]) + " >> true ");
console.log( possiblyPerfect([..."_TTT"],[..."TTFT"]) + " >> false ");
console.log( possiblyPerfect([..."_TTT"],[..."TTTT"]) + " >> true ");
console.log( possiblyPerfect([..."_TTT"],[..."FFFF"]) + " >> true ");
console.log( possiblyPerfect([..."____"],[..."FFFF"]) + " >> true ");


// Mean vs. Median

function meanVsMedian(numbers) {
    let sum=0;
    let median=numbers[1]
    for (let i = 0; i < numbers.length; i++) {
        sum+=numbers[i];
        
    }
    let mean=sum/3;
    if (mean>median) {
        console.log("mean")
    }
    else if (mean<median) {
        console.log("median")
    }
    else{
        console.log("same")
    }
}


console.log(meanVsMedian([1, 1, 1]), ' >> same');
console.log(meanVsMedian([1, 2, 37]), ' >> mean');
console.log(meanVsMedian([7, 14, -70]), ' >> median');








// Swap the head and the tail
function swapHeadAndTail(arr) {
    let kozepso=arr.length/2
    let head=arr.slice[0,kozepso];
    let tail=arr.slice[kozepso];
    console.log(head,tail)
}

console.log(swapHeadAndTail([ 1, 2, 3, 4, 5 ]), [ 4, 5, 3, 1, 2 ]);
console.log(swapHeadAndTail([ -1, 2 ]), [ 2, -1 ]);
console.log(swapHeadAndTail([ 1, 2, -3, 4, 5, 6, -7, 8 ]), [ 5, 6, -7, 8, 1, 2, -3, 4 ]);