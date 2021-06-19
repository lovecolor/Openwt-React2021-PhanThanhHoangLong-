const filter = (arr, fn) =>
  arr.reduce((acc, val) => (acc[fn(val) ? 0 : 1].push(val), acc), [[], []]);
console.log(filter(['beep', 'boop', 'foo', 'bar'], x => x[0] === 'b'))