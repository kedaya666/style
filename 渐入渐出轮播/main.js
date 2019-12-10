/**
 * Created by hxsd on 2016/9/18.
 */

/*
 *  获取content,getElementById用document对象调用
 * */
var content = document.getElementById('content');
/*
 * 获取5张大图
 * */
var bigArray = document.getElementById('content-big-pic').getElementsByTagName('li');
/*
 * 获取5张小图
 * */
var smallArray = document.getElementById('content-small-pic').getElementsByTagName('li');

/*其他相关变量*/
var index = 0;//记录当前显示的那张图
var timer = 0;//保存定时任务

/*自动轮播*/
/*
 * 自动轮播所需内容：
 *   setInterval(定时任务，时间间隔)
 *   index记录当前显示的是哪张图
 * */
function autoPlay()
{
    //创建定时任务，开始自动轮播(每隔2s显示一张图)
    timer = setInterval(
        function () {
            index++;
            if(index == bigArray.length)
            {
                index = 0;
            }
            show(index);
        },2000
    );
}

/*
 * 功能： 传入willShow，显示下标为willShow的那张图
 * bigArray中每张图的下标为 0,1,2,3,4
 * */
function show(willShow)
{
    /*显示下标为willShow的大图
     * 先让所有5张图隐藏，然后显示下标为willShow的那张图
     * */
    for(var i = 0;i < bigArray.length;i++)
    {
        bigArray[i].className = '';//每张图都隐藏
    }
    bigArray[willShow].className = 'current';

    /*
     * 给下标为willShow的小图添加红色边框
     * 先让所有5张图取消红框，然后显示下标为willShow的那张图的红框
     * */
    for(var i = 0;i < smallArray.length;i++){
        smallArray[i].className = '';
    }
    smallArray[willShow].className = 'current';

    //将willShow赋值给index，记录下当前显示的那张图
    index = willShow;
}
/*
 * 鼠标移入轮播图，取消轮播（通过取消定时任务实现）
 * */
content.onmouseover = function () {
    clearInterval(timer);
};
/*鼠标移出轮播图，继续开始自动轮播(直接调用autoPlay函数，开始轮播)*/
content.onmouseout = function () {
    autoPlay();
};

/*鼠标移入某个小图，大图区域显示对应大图*/
/*重点是让所有小，具备鼠标移入，切换大图的能力(通过给小图的onmouseover赋值来实现)*/
for(var i = 0;i < 5;i++)
{
    smallArray[i].i = i;
    smallArray[i].onmouseover = function () {
        //鼠标移入小图，切换大图
        show(this.i);//this代表鼠标所在的对象（小图）
    }
}

autoPlay();