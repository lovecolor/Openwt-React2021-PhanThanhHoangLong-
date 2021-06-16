const yesNo=(val)=>{
    if(/^(y|yes)$/i.test(val)) return true;
    if(/^(n|no)$/i.test(val)) return false;
}
console.log(yesNo("nv"))