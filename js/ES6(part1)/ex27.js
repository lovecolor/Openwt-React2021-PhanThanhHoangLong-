const union = (arr1, arr2, comp) => {
  return Array.from(
    new Set([
      ...arr1,
      ...arr2.filter((e) => arr1.findIndex((x) => comp(x, e)) == -1),
    ])
  );
};
console.log(union([1, 1.2, 1.5, 3, 0], [1.9, 3, 0, 3.9], (a, b) => Math.round(a) === Math.round(b)))