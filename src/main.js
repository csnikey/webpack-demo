import './main.scss'
const {hello}=require("./module");
document.querySelector("#app").appendChild(hello('zhangsan'));
