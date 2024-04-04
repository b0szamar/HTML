
function gimmeTheLetters(sp) {
    const [start, end] = sp.split('-')
    const startCode = start.charCodeAt(0);
    const endCode = end.charCodeAt(0)
      let result = '';
      for (let i = startCode; i <= endCode; i++) {
          result += String.fromCharCode(i);
      }
      return result;
  }