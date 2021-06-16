const csvToArr = (str, char = ",") => str.split("\n").map((e) => e.split(char));
console.log(csvToArr('a,b\nc,d'))