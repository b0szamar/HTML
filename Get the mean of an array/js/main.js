function average(marks) {
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    return avg = Math.floor(sum / marks.length);
}
console.log(average([1, 2, 3, 4, 5]));