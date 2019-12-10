/**
 * Created by Administrator on 2016/11/3 0003.
 */
/*--------------新歌首发---------------------*/
var page=1;
var i=4;
var box=$(".new");
var left=$("#left");
var right=$("#right");
var hot=$(".hot");
var left2=$("#left2");
var right2=$("#right2");
/*-------------鼠标移入移出----------------*/
box.mouseover(function(){
    $("#left").css("display","block");
    $("#right").css("display","block");
});
box.mouseout(function(){
    $("#left").css("display","none");
    $("#right").css("display","none");
});
left.mouseover(function(){
    left.addClass("color");
    left.animate({width:84},800);
});
left.mouseout(function(){
    left.removeClass("color");
    left.css("width","74px");
});
right.mouseover(function(){
    right.addClass("color");
    right.animate({width:84},800);
});
right.mouseout(function(){
    right.removeClass("color");
    right.css("width","74px");
});

/*----------点击换图-------------*/
//向右移动
right.click(function(){
    var strip=$(".strip");
    var content=$("#content");
    var list=content.find(".img-list");
    var width=content.width();
    var len=list.find("li").length;
    var page_count=Math.ceil(len/i);
    if(!list.is(":animated")){

        if(page==page_count){
            list.animate({left:'0px'},"0");
            page=1;
        }
        else{
            list.animate({left:'-='+width},"slow");
            page++;
        }
    }
    strip.find("span").eq((page-1)).addClass("one").siblings().removeClass("one");
});
//向左移动
left.click(function(){
    var strip=$(".strip");
    var content=$("#content");
    var list=content.find(".img-list");
    var width=content.width();
    var len=list.find("li").length;
    var page_count=Math.ceil(len/i);
    if(!list.is(":animated")){
        if(page==1){
            list.animate({left:'-='+width*(page_count-1)},"fast");
            page=page_count;
        }
        else{
            list.animate({left:'+='+width},"slow");
            page--;
        }
    }
    strip.find("span").eq((page-1)).addClass("one").siblings().removeClass("one");
});
/*-------------热门歌单------------*/
hot.mouseover(function(){
    $("#left2").css("display","block");
    $("#right2").css("display","block");
});
hot.mouseout(function(){
    $("#left2").css("display","none");
    $("#right2").css("display","none");
});
left2.mouseover(function(){
    left2.addClass("color");
    left2.animate({width:84},800);
});
left2.mouseout(function(){
    left2.removeClass("color");
    left2.css("width","74px");
});
right2.mouseover(function(){
    right2.addClass("color");
    right2.animate({width:84},800);
});
right2.mouseout(function(){
    right2.removeClass("color");
    right2.css("width","74px");
});
/*----------点击换图-------------*/
//向右移动
right2.click(function(){
    /*alert("ceshi");*/
    var hotPage=1;
    var j=4;
    var current=$("#current");
    var hotList=current.find(".hot-list");
    var hotWidth=current.width();
    var hotLen=hotList.find("li").length;
    var hotPage_count=Math.ceil(hotLen/j);

    if(!hotList.is(":animated")){

        if(hotPage==hotPage_count){
            hotList.animate({left:'0px'},"0");
            hotPage=1;
        }
        else{
            hotList.animate({left:'-='+hotWidth},"slow");
            hotPage++;
        }
    }
    strip.find("span").eq((page-1)).addClass("one").siblings().removeClass("one");
});
//向左移动
left2.click(function(){

    var hotPage=1;
    var j=4;
    var current=$("#current");
    var hotList=current.find(".hot-list");
    var hotWidth=current.width();
    var hotLen=hotList.find("li").length;
    var hotPage_count=Math.ceil(hotLen/j);
    if(!hotList.is(":animated")){

        if(hotPage==1){
            hotList.animate({left:'-='+hotWidth*(hotPage_count-1)},"fast");
            hotPage=hotPage_count;
        }
        else{
            hotList.animate({left:'+='+hotWidth},"slow");
            hotPage--;
        }
    }
    strip.find("span").eq((page-1)).addClass("one").siblings().removeClass("one");
});










