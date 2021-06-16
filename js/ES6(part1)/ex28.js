const time=callback=>{
    const rs=callback();
    return rs;
}
console.log(time(() => Math.pow(2, 10)))