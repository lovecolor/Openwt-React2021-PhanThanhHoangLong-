const convertArrToObj = (arr) =>
  arr.reduce((acc, e, i) => (acc[e[0]] = e[1],acc), {});
console.log(
    convertArrToObj([['a', 1], ['b', 2]])
);
