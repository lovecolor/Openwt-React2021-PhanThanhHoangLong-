const extractoutById=(arr,arrId)=>{
return arr.filter((e,idx)=>arrId.indexOf(idx)>-1)
}
let arra1 = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(extractoutById(arra1,[1,3]))