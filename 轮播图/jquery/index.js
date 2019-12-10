// JavaScript Document
$(function(){
var index=0;	
var banner=$(".banner");//找到最大的盒子
var smallBtn=banner.find(".btn li");//找到下面小圆点数组
var imgList=banner.find(".img-list li");//找到中间对应的图片数组盒子
var preBtn=banner.find(".pre")//找到右边点击图片的按钮；
var nextBtn=banner.find(".next")//找到左边点击图片的按钮；
var timer=window.setInterval(function(){move()},1000);
	banner.hover(function(){
		window.clearInterval(timer);

	},function(){timer=window.setInterval(function(){move()},1000);})
//运动函数
function tab(){
	smallBtn.eq(index).addClass("active").siblings().removeClass("active");
	imgList.eq(index).addClass("active").siblings().removeClass("active");
	}
	
//当鼠标移入小圆点的变化	
smallBtn.mouseover(
function(){
	index=$(this).index();
	tab();
	})
//当鼠标点击左边箭头的变化	
preBtn.click(function(){
	index--;
	if(index<0){index=imgList.length-1}
	tab();	
	})
//当鼠标点击右边箭头的变化

nextBtn.click(function (){
	move()
	})
	
function move(){
	index++;
	if(index>imgList.length-1){index=0;}
	tab();
	
	}				
})



