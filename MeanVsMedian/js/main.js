function meanVsMedian(szamok) {
    let sum = 0;
    for (let i = 0; i < szamok.length; i++) {
        sum += szamok[i];
    }
    let mean = sum / szamok.length;
    let median = szamok.length / 2;
    median = szamok.slice(median, median + 1);
    if (mean > median) {
        return "mean";
    }
    else if (mean < median) {
        return "median";
    }
    else {
        return "same"
    }
}

console.log(meanVsMedian([1, 2, 3, 4, 5]));