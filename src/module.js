// module.js
const HELLO="Hello word !我是";
var hello= function(name) {
    var greet = document.createElement('h1');
    greet.textContent =`${HELLO}${name}`;
    return greet;
}
module.exports = {
    hello
}