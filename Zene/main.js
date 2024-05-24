const fs = require('fs');

// directories
if (!fs.existsSync('./szoveg')) {
    fs.mkdir('./szoveg', err => {
      if (err) {
        console.log(err);
      }
      console.log('folder created');
    });
  } else {
    fs.rmdir('./szoveg', err => {
      if (err) {
        console.log(err);
      }
      console.log('folder deleted');
    });
  }

// writing files
fs.writeFile('./szoveg/muzsika.txt', 'János legyen fenn a János-hegyen, estére odavárom. \nJános nekem nehogy álmos legyen, mert én azt ki nem állom. \nJajj Jani, szeretném hallani, szerelmet vallani, csak ez a kívánságom. \nJános legyen fenn a János-hegyen, estére odavárom.\nJajj Jani, szeretném hallani, szerelmet vallani, csak ez a kívánságom.\nJános legyen fenn a János-hegyen, estére odavárom.\nJajj Jani, szeretném hallani, szerelmet vallani, csak ez a kívánságom.\nJános legyen fenn a János-hegyen, estére odavárom.\nJajj Jani, szeretném hallani, szerelmet vallani, csak ez a kívánságom.\nJános legyen fenn a János-hegyen, estére odavárom.', () => {
  console.log('file was written');
});


// reading files
fs.readFile('./szoveg/muzsika.txt', (err, data) => {
    if (err) {
      console.log(err);
    }  
    console.log(data.toString());
  });