const coalesce = (...args) => args.find(_ => ![undefined, null].includes(_));
console.log(coalesce(null, undefined, '', NaN, 'abcd','aa',1));