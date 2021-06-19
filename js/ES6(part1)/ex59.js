const bind = (fn, context, ...args) =>
  function() {
    return fn.apply(context, [].concat(...arguments));
  };
function greet(greeting, punctuation) {
   
  return greeting + ' ' + this.user + punctuation;
}
const freddy = { user: 'Morning' };
const freddyBound = bind(greet, freddy);
console.log(freddyBound('Good', '!',"."));