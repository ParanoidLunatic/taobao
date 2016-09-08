var num = 13;
var string = "str";
var boolean = false;
var _null = null;
var _undefined = undefined;
var _function = function(){};
function func(){}
var obj = {};
var _obj = function(){};
var __obj = new Object();
console.log(obj);
if(num){
	console.log(num);
}
switch(num){
	case "123":
	console.log(num);
	break;
	case 123:
	console.log(num);
	break;
}
while(num){
	num = 0;
	console.log(num);
}
for(;!num;){
	num =1;
	console.log(num);
}
console.log(num.toString());
console.log(num.replace(/t/,"555"));
console.log(string.indexOf("r"));
console.log(string.search(/r/));
console.log((typeof _obj));
console.log(!0 && (3||2));
//IE7，IE8不支持
//console.log(document.getElementsByClassName("hot")[0]);
//IE7不支持
//console.log(document.querySelector(".hot"))
document.getElementById("home").innerHTML =  123;
document.getElementById("home").innerText = "首页";
document.getElementsByTagName("div")[0].id = "firstDiv";
document.getElementsByTagName("div")[0].className = "firstDiv";
//IE7，IE8,IE9不支持
console.log(document.getElementsByTagName("div")[0].classList);
var ipt = document.createElement("input")
document.body.appendChild(ipt);
ipt.value = "值";
//IE7，IE8支持
console.log(ipt.getAttribute("value"));
console.log(a.getAttribute("id"));
console.log("value");
//文档碎片
document.createDocumentFragment();