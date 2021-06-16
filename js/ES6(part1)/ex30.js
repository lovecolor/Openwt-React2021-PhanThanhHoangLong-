const filterOut=(arr,...args)=>{
    return arr.filter(e=>!args.includes(e))
}
console.log(filterOut([2, 1, 2, 3], 1, 2))