/**
 * Created by Administrator on 2016/10/11 0011.
 */
/*------------------�����˵�---------------------*/

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
/*--------------------ѡ�-------------------*/
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
/*------------------------�ֲ�ͼ�����뽥����--------------------------*/

var content=document.getElementById("content");
//��ȡ���Ŵ�ͼ
var bigArray=document.getElementById("banner-bigimg").getElementsByTagName("li");
//��ȡ����Сͼ
var smallArray=document.getElementById("banner-smallimg").getElementsByTagName("li");
//������ر���
var index=0;
var timer=0;
//�Զ��ֲ�
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
//��ͼ
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
//��������ֲ�ȡ��
content.onmouseover = function () {
    clearInterval(timer);
};
//����Ƴ��ֲ���ʼ
content.onmouseout = function () {
    autoPlay();
};
//�������ĳ��Сͼ����ͼ������ʾ��Ӧ��ͼ
for(var i = 0;i < 6;i++)
{
    smallArray[i].i = i;
    smallArray[i].onmouseover = function () {
        show(this.i);
    }
}
autoPlay();
/*----------------------�����ͼ---------------------------*/
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
/*----------------------�����һ��-------------------------*/
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
/*--------------------�ֲ�ͼ����ͼ��---------------------*/
var currentIndex = i = 0;
var time = null;
var picture1=document.getElementById("picture1");
var bigImgArray=picture1.getElementsByTagName("img");

function changeImg(willShow2){
    //ͼƬ�ص���ʼλ��
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
    else//һ�����ֲ�
    {
        var left =  Math.abs(parseInt(bigImgArray[willShow2].style.left));
        for (i = 0; i < bigImgArray.length; i++) {
            var tempi = parseInt(bigImgArray[i].style.left);
            bigImgArray[i].style.left = tempi + (willShow2 < currentIndex ? left : -left) + 'px';}
    }
}
//�Զ��ֲ�
function autoPlay2()
{
    time = setInterval(function ()
    {
        currentIndex++;
        if(currentIndex == bigImgArray.length) currentIndex = 1;
        changeImg(currentIndex);
    },2000);
}
//�����������ֲ�
picture1.onmouseover = function () {
    clearInterval(time);
};
//����Ƴ��ֲ���ʼ
picture1.onmouseout = function () {
    autoPlay2();
};
autoPlay2();
/*-----------------------------�����¼�-----------------------------*/
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




