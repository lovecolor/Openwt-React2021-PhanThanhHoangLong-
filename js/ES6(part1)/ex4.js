const csvToJSON=(str,char=',')=>{
    const title=str.slice(0,str.indexOf('\n')).split(char)
    return str.slice(str.indexOf('\n')+1).split('\n').map(e=>{
        let obj={}
        const value=e.split(char)
        title.map((e,idx)=>obj[e]=value[idx])
        return obj;
    })
}
console.log(csvToJSON('col1,col2\na,b\nc,d'))