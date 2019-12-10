/**
 * Created by Administrator on 2016/10/11 0011.
 */
/*------------------下拉菜单---------------------*/

function nav(id)
{
    var li1=document.getElementById(id);
    li1.onmouseover=show;
    li1.onmouseout=hid;
    var sub=li1.getElementsByTagName("ul")[0];
    function show(){
        sub.style.display="block";
    }
    function hid(){
        sub.style.display="none"
    }
}
nav("li1");
function nav2(id)
{
    var li1=document.getElementById(id);
    li1.onmouseover=show;
    li1.onmouseout=hid;
    var sub=li1.getElementsByTagName("div")[0];
    function show(){
        sub.style.display="block";
    }
    function hid(){
        sub.style.display="none"
    }
}
nav2("li2");
nav2("li3");
nav2("li4");
/*--------------------选项卡-------------------*/
function left(id)
{
    var lia=document.getElementById("lia");
    lia.onmouseover=show;
    lia.onmouseout=hid;
    var sub=lia.getElementsByTagName("div")[0];
    function show(){
        sub.style.display="block";
    }
    function hid(){
        sub.style.display="none"
    }
}
left("lia");
/*------------------------轮播图（渐入渐出）--------------------------*/

var content=document.getElementById("content");
//获取六张大图
var bigArray=document.getElementById("banner-bigimg").getElementsByTagName("li");
//获取六张小图
var smallArray=document.getElementById("banner-smallimg").getElementsByTagName("li");
//其他相关变量
var index=0;
var timer=0;
//自动轮播
function autoPlay(){
    timer=setInterval(
        function(){
            index++;
            if(index==bigArray.length){
                index=0;
            }
            show(index);
        },3000
    );
}
//大图
function show(willShow){
    for(var i=0;i<bigArray.length;i++){
        bigArray[i].className="";
    }
    bigArray[willShow].className="current";

    for(var i=0;i<smallArray.length;i++){
        smallArray[i].className="";
    }
    smallArray[willShow].className="current";
    index=willShow;
}
//鼠标移入轮播取消
content.onmouseover = function () {
    clearInterval(timer);
};
//鼠标移出轮播开始
content.onmouseout = function () {
    autoPlay();
};
//鼠标移入某个小图，大图区域显示对应大图
for(var i = 0;i < 6;i++)
{
    smallArray[i].i = i;
    smallArray[i].onmouseover = function () {
        show(this.i);
    }
}
autoPlay();
/*----------------------点击换图---------------------------*/
var lunbo=document.getElementById("lunbo");
var check=lunbo.getElementsByTagName("div");
var pic=lunbo.getElementsByTagName("img");
lunbo.onmouseover=function(){
    for(var i=0;i<2;i++){
        check[i].style.display="block";
    }
};
lunbo.onmouseout=function(){
    for(var i=0;i<2;i++){
        check[i].style.display="none";
    }
};
function change(){
    for(var i=0;i<2;i++){
        check[i].onclick= function(){
            for(var j=0;j<4;j++){
                pic[j].src="images/57fc6542Ne2b3cd94.jpg"
            }
        }
    }
}
change();
/*----------------------点击换一批-------------------------*/
var huan=document.getElementById("huan");
var guss=document.getElementById("guss");
var picture=guss.getElementsByTagName("img");
function onclick(){
    huan.onclick=exChange;
}
function exChange(){
	for(var i =0; i<picture.length; i++){
		  picture[i].src="images/"+ (Math.floor(Math.random()*5)+1) +".png";
		}
}
onclick();
/*--------------------轮播图（切图）---------------------*/
var currentIndex = i = 0;
var time = null;
var picture1=document.getElementById("picture1");
var bigImgArray=picture1.getElementsByTagName("img");

function changeImg(willShow2){
    //图片回到初始位置
    if(willShow2==1){
        for(var i=0;i<bigImgArray.length;i++)
        {
            /*alert("ceshi");*/
            bigImgArray[i].style.transitionDuration = '0.0s';
            bigImgArray[i].style.left = i*439+'px';
        }
        setTimeout(function () {
            for (i = 0; i < bigImgArray.length; i++) {
                bigImgArray[i].style.transitionDuration = '1.0s';
                bigImgArray[i].style.left = (i-1)*439 + 'px';
            }
        },100);
    }
    else//一张张轮播
    {
        var left =  Math.abs(parseInt(bigImgArray[willShow2].style.left));
        for (i = 0; i < bigImgArray.length; i++) {
            var tempi = parseInt(bigImgArray[i].style.left);
            bigImgArray[i].style.left = tempi + (willShow2 < currentIndex ? left : -left) + 'px';}
    }
}
//自动轮播
function autoPlay2()
{
    time = setInterval(function ()
    {
        currentIndex++;
        if(currentIndex == bigImgArray.length) currentIndex = 1;
        changeImg(currentIndex);
    },2000);
}
//鼠标移入清除轮播
picture1.onmouseover = function () {
    clearInterval(time);
};
//鼠标移出轮播开始
picture1.onmouseout = function () {
    autoPlay2();
};
autoPlay2();
/*-----------------------------滚动事件-----------------------------*/
var foot=document.getElementById("foot");
var floor=foot.getElementsByTagName("li");
var trueFloor=document.getElementsByClassName("floor1");
window.onscroll=function(){
    var t=document.documentElement.scrollTop||document.body.scrollTop;
    for(var i=4;i>=0;i--){
        if(trueFloor[i].offsettop<t) {
            floor[i].style.color="red";
        }
    }
};




