/**
 * Created by Administrator on 16-10-5.
 */
var imgs=document.getElementsByTagName("img");
var currentTime = "60";
var time=60;
var setTime;
window.onload = function(){
    setTime=setInterval(function(){
        if(time<=0){
            clearInterval(setTime);
            return;
        }else{
            time--;
            var string_time="";
            if(time<10){
                string_time = "0"+time.toString();
            }else{
                string_time = time.toString();
            }
            for(var i=0;i<string_time.length;i++){
                imgs[i].src="images/"+string_time.charAt(i)+".png"
            };
            for(var i=0;i<string_time.length;i++){
                if(string_time.charAt(i)!=currentTime.charAt(i)){
                    toShake(imgs[i]);
                }
            }
            currentTime=string_time;
        }
    },1000);
}

function checkNumber(a){
    if(a<=9){
        return "0"+a;
    }
    else{
        return a;
    }
}
function toShake(img){
    var array=new Array();
    for(var i=10;i>0;i-=2){
        array.push(i);
        array.push(-i);
    }
    array.push(0);

    var index=0;
    var timer=setInterval(function(){
        img.style.top=array[index]+"px";
        index++;
        if(index==array.length){
            clearInterval(timer);
        }

    },60)
}



