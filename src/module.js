// module.js
const HELLO="Hello word!";
var hello= function(name) {
    var greet = document.createElement('h1');
    greet.textContent =`HELLO${HELLO}`;
    return greet;
}
module.exports = {
    hello
}