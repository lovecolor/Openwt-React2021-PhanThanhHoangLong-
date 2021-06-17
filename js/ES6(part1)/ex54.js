const createArr = (start, end, step) => {
  return Array.from({ length: Math.ceil((end - start + 1)/step) }).map(
    (e, i) => i * step + start
  );
};
console.log(createArr(3,8,3))
