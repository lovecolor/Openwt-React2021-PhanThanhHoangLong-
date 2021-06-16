const renAllCombination=(arr)=>{
    return arr.reduce((rs,newNum)=>rs.concat(rs.map(e=>[newNum].concat(e))),[[]])
}
console.log(renAllCombination([1,2,3]))
