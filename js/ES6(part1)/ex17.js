const filterArr = (arr, filter) =>
  arr.reduce(
    (rs, value, idx) => (rs[filter[idx] ? 0 : 1].push(value), rs),
    [[], []]
  );
console.log(filterArr([1, 2, 3, 4], [true, true, false, true]));
