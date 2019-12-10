/**
 * Created by myj on 2016/11/23 0023.
 */
/*--3、页面加载完成后执行--*/
$(function(){
    $(".main").fullpage({
        sectionsColor:['#1bbc9b','#1bbc9b','#1bbc9b','#1bbc9b']
    });
    //获取audiobox，audio
    var audiobox=document.getElementById("audiobox");
    var audio=document.getElementById("audio");
    audiobox.onclick=function(){
        if(audio.paused)//暂停状态
        {
            audio.play();
        }
        else{
            audio.pause();
        }
    }
});
