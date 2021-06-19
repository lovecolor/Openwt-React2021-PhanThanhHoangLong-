const cloneRegExp = regExp =>regExp;
let regExp = /lorem ipsum/gi;

console.log(regExp);
let regExp2 = cloneRegExp(regExp);

console.log(regExp2);
