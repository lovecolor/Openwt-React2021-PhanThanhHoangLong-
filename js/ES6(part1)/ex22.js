const unique = (arr) =>
  arr.filter((e) => arr.indexOf(e) === arr.lastIndexOf(e));
  console.log(unique([1,2,3,4,5,5,5,4]))
