const filterArr = (arr, ...args) => {
  return arr.filter((e) => args.indexOf(e) < 0);
};
let arra1 = ['a', 'b', 'c', 'a', 'b', 'c'];
console.log(filterArr(arra1, 'a', 'c'))
