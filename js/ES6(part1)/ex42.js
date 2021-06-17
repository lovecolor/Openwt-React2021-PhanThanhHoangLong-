const coalesceFactory = valid => (...args) => 
{
    
    return args.find(valid);
}
const customCoalesce = coalesceFactory(_ => ![null, undefined, '', NaN].includes(_));
console.log(customCoalesce(undefined, null, NaN, '', 'Waldo'));
