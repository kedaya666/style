/**
 * Created by Administrator on 16-10-28.
 */
$(document).ready(function(){
    var page=1;
    var i=4;

    //向右移动
    $(".next").click(function(){
        var jq1=$(this).parents(".box");
        var jq2=jq1.find(".conent");
        var jq3=jq1.find(".div2");
        var jqwidth=jq3.width();
        var len=jq2.find("li").length;
        var page_count=Math.ceil(len/i);
        if(!jq2.is(":animated")){
            if(page==page_count){
                jq2.animate({left:'0px'},"slow");
                page=1;
            }
            else{
                jq2.animate({left:'-='+jqwidth},"slow");
                page++;
            }
        }
        //设置小圆点样式
        jq1.find("span").eq((page-1)).addClass("one").siblings().removeClass("one");
    });
    //向左移动
    $(".prev").click(function(){
        var jq1=$(this).parents(".box");
        var jq2=jq1.find(".conent");
        var jq3=jq1.find(".div2");
        var jqwidth=jq3.width();
        var len=jq2.find("li").length;
        var page_count=Math.ceil(len/i);
        if(!jq2.is(":animated")){
            if(page==1){
                jq2.animate({left:'-='+jqwidth*(page_count-1)},"slow");
                page=page_count;
            }
            else{
                jq2.animate({left:'+='+jqwidth},"slow");
                page--;
            }
            //设置小圆点样式
            jq1.find("span").eq((page-1)).addClass("one").siblings().removeClass("one");
        }
    })



});