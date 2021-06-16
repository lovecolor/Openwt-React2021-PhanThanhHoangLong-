const sum=(arr,fn)=>arr.map(fn).reduce((sum,e)=>sum+e,0)
console.log(sum([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], o => o.n))