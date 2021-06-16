const filter = (arr, fn) => {
  return arr.filter((e, i) => arr.every((x, j) => (i === j) === fn(e, x)));
};
console.log(filter([
    { id: 0, value: 'a' },
    { id: 1, value: 'b' },
    { id: 2, value: 'c' },
    { id: 1, value: 'd' },
    { id: 0, value: 'e' }
  ],
  (a, b) => a.id == b.id))