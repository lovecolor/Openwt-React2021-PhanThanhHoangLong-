const checkTarget=(obj,target)=>{
    let rs=undefined;
    if(target in obj) return obj[target]
    const arrValue=Object.values(obj)
    for(let i=0;i<arrValue.length;i++)
    {
        if(typeof arrValue[i]==="object") rs=checkTarget(arrValue[i],target)
    }
    return rs;
}
const data = {
    level1: {
      level2: {
        level3: 'some data'
      }
    }
  };
  
console.log(checkTarget(data,'level3'))