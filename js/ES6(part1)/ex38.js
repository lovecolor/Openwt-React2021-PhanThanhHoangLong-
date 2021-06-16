const pad = (str, length, char = ' ') =>
 str.padStart((str.length + length) / 2, char).padEnd(length, char);
 console.log(pad('cataaaaaaaaaaaaaaat', 8,'.'));