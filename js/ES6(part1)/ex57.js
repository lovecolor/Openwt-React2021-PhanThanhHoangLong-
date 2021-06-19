const avg = (arr, fn) =>
  arr
    .map(typeof fn === "function" ? fn : (val) => val[fn])
    .reduce((acc, val) => acc + val, 0) / arr.length;
console.log(avg([{ a: 40 }, { a: 20 }, { a: 80 }, { a: 60 }], o => o.a))