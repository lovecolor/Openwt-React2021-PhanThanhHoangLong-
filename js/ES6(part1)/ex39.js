const deleteKey = (obj, keys) => {
  keys.map((e) => 
  {
      delete obj[e]
      
  });
  
  return obj;

};
console.log(deleteKey({ a: 1, b: '2', c: 3 }, ['b','a']))