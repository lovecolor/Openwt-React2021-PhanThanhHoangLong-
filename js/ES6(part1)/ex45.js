const filter=(arr,filter)=>{
    return arr.reduce((acc,e,i)=>(acc[filter[i]?0:1].push(e),acc),[[],[]])
}
console.log(filter(['beep', 'boop', 'foo', 'bar'], [true, true, false, true]))