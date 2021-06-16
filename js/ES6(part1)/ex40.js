const convertObjtoArr = (obj) => {
  return Object.keys(obj).map((key) => [key, obj[key]]);
};
console.log(convertObjtoArr({a:"1",b:"2"}))
