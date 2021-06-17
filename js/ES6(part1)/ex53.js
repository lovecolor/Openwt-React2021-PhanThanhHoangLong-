const initialize_2D_Array = (w, h, val = null) =>
 Array.from({ length: h }).map(() => Array.from({ length: w }).fill(val));

console.log(initialize_2D_Array(2, 3, 0));
console.log(initialize_2D_Array(3, 3, 3));