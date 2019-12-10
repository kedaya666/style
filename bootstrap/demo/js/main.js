/**
 * Created by myj on 16-12-1.
 */
$(function(){
    $(".carousel").carousel({
        interval:2000
    });
    //下拉菜单
    $("#button").mouseenter(function(){
        $("#button").dropdown("toggle");
    });
    $("#button").mouseleave(function(){
        $("#button").dropdown("toggle");
    });

});
