import './main.scss'
const {hello}=require("./module");
document.querySelector("#app").appendChild(hello('zhangsan'));
import "ua-parser-js"
var ua=navigator.userAgent.toLowerCase(); 
var parser = require('ua-parser-js');
var uaStr=parser(ua);
console.log(uaStr);
