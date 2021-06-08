/* change background */

Timeinterval= 0.5*60*1000; //ms
a=[
"background.png",
"background3.jpg",
"background4.png",
"background5.png",
"background6.jpg",
"background7.jpg",
"background8.jpg",
"background9.jpg",
"background10.png"
];
console.log("loaded userbg.js");
var obj=document.body;//document.getElementById("body");
//console.log(obj);
temp=obj.style.cssText;
//console.log(temp);
var pos=-1;
changeBackground=function(){
	pos=parseInt(Math.random()*a.length); // 随机背景
	//pos=(pos+1)%a.length; // 顺序背景
	//console.log(pos);
	obj.style.cssText=temp+"background:url(/images/"+a[pos]+") no-repeat fixed;"
	+ "background-position:50% 50%;" // 图片位置：居中
	+ "background-size: cover";
	//console.log(obj.style.cssText);
};
changeBackground();
//console.log(temp);
setInterval(changeBackground,Timeinterval);

