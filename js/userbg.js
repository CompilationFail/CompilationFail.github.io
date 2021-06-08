/* change background */

Timeinterval= 2*60*1000; //ms
a=[
"background.png",
"background3.jpg",
"background4.png",
"background5.png",
"background6.jpg",
"background7.jpg"
];
console.log("loaded userbg.js");
var obj=document.body;//document.getElementById("body");
console.log(obj);
temp=obj.style.cssText;
console.log(temp);
var pos=-1;
changeBackground=function(){
	pos=parseInt(Math.random()*a.length);
	console.log(pos);
	obj.style.cssText=temp+"background:url(/images/"+a[pos]+");"+
	+ "background-repeat: no-repeat;" // 不重复
	+ "background-attachment:fixed;" // 固定住背景图片
	+ "background-position:50% 50%;" // 图片位置：居中
	+ "background-size: cover";
	console.log(obj.style.cssText);
};
console.log(temp);
setInterval(changeBackground,Timeinterval);

