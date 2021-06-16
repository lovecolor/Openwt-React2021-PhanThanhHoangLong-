const pair = (arr1, arr2) =>
  arr1.reduce((rs, e1) => rs.concat(arr2.map((e2) => [e1, e2])), []);
console.log(pair([1,2,3],["x","y","z","t"]))