function deEmojify(emojiString) {
    const emoji = [':)', ':D', '>(', '>:C', ':/', ':|', ':O', ';)', '^.^', ':('];
    const r = emojiString.split(' ').map((a, i) => {
      return (emoji.indexOf(a) > -1 ?  emoji.indexOf(a) : '*');
    }).join('');
    return r.split('*').map((a) => {
      return ['', ' '].includes(a) ? a : String.fromCharCode(a);
    }).join('');
  }