const jsonToCSV=(arr,columns,char=',')=>{
    return [
        columns.join(char),
        ...arr.map((e,idx)=>{
            let str="";
            columns.map((column,idx)=>{
                str+=e[column]?e[column]:'""'
                if(idx<columns.length-1)
                str+=",";
            })
            return str;
        })
    ].join("\n")
}
console.log(jsonToCSV([{ x: 100, y: 200 }, { x: 300, y: 400, z: 500 }, { x: 6 }, { y: 7 }], ['x', 'y']))