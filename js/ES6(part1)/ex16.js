const checkAll=(arr,fn=Boolean)=>arr.every(fn)
console.log(checkAll([4, 2, -1], x => x > 1))