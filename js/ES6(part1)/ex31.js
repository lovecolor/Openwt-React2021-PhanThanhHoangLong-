const getNonFirst = (arr) => (arr.length == 1 ? arr : arr.slice(1));
console.log(getNonFirst([1,2]))