function minValueOrIndex(fgv, mode) {
    if (mode == 'value') {
        let minValue = Math.min(...fgv);
        return minValue;
    } else {
        let minIndex = fgv.indexOf(Math.min(...fgv));
        return minIndex;
    }
}
let arrayExample = [64, 25, 37, 43, 51];
document.write("<p>Min Value: " + minValueOrIndex(arrayExample, 'value') + "</p>");
document.write("<p>Min Index: " + minValueOrIndex(arrayExample, 'index') + "</p>");
console.log(arrayExample)