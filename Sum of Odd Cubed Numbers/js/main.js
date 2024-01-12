function cubeAndSumOddNumbers(arr) {
    if (!Array.isArray(arr)) {
      return undefined;
    }

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (isNaN(arr[i])) {
        return undefined;
      }
      const cubedNumber = Math.pow(arr[i], 3);
      if (cubedNumber % 2 !== 0) {
        sum += cubedNumber;
      }
    }
    return sum;
  }
  function calculateSum() {
    const inputArray = document.getElementById("numberArray").value.split(',').map(Number);
    const result = cubeAndSumOddNumbers(inputArray);
    if (result === undefined) {
      document.getElementById("result").textContent = "Számokat adjon meg!";
    } else {
      document.getElementById("result").textContent = "Az összeg " + result;
    }
  }