/**
 * Created by ytf on 16/9/11.
 */

/*
* js文档
* 行内样式/直接在js中设置 的样式,可以直接获取.
* 内嵌样式/外链样式,需要特殊获取.
*   方式一: obj.currentStyle['left']  -- only ie
*   方式二: getComputedStyle(obj,false)['left']  -- ie,ff,google
* */

/**
 * 定义全局变量
 */
var currentIndex = i = 0;
var timer = null;
var content = document.getElementById('content');
var uls = document.getElementsByTagName('ul');
var bigPicArray = uls[0].getElementsByTagName("img");
var smallPicArray = uls[1].getElementsByTagName("img");

/**
 * 给鼠标添加悬浮事件
 */
for(i = 0;i < smallPicArray.length;i++)
{
    smallPicArray[i].index = i;
    smallPicArray[i].onmouseover = function () {
        changePic(this.index);
    }
}

/**
 * 公用代码
 */
function changePic(willShow)
{
    /**
     * 先处理大图切换
     */

    /**
     * 将要显示第二张图片时: 所有图片回到初始状态
     * 难点: 让用户感觉不到图片的移动过程.
     */
    if(willShow == 1)
    {
        //让所有图片立即回到初始位置
        for(i = 0;i < bigPicArray.length;i++)
        {
            bigPicArray[i].style.transitionDuration = '0.0s';
            bigPicArray[i].style.left = i*500+'px';
        }
        //所有图片左移一张图,显示第二张图
        setTimeout(function () {
            for (i = 0; i < bigPicArray.length; i++) {
                bigPicArray[i].style.transitionDuration = '1.0s';
                bigPicArray[i].style.left = (i-1)*500 + 'px';
            }
        },2);
    }

    else
    {
        //要显示图片的left值
        var left =  Math.abs(parseInt(bigPicArray[willShow].style.left));//left:将要显示图片距离图片框的距离

        /**
         * 让所有大图一起移动
         * (1)自动播放时: 一起左移一个图片宽度
         * (2)鼠标选择时: 一起左移/右移n个图片宽度
         */
        for (i = 0; i < bigPicArray.length; i++) {
            var tempi = parseInt(bigPicArray[i].style.left);
            bigPicArray[i].style.left = tempi + (willShow < currentIndex ? left : -left) + 'px';
            //bigPicArray[i].style.left = tempi + (willShow < currentIndex ? left : -left) + 'px';
        }
    }

    /**
     * 再处理小图,显示红框
     */
    //所有小图隐藏红框
    for(i = 0;i < smallPicArray.length;i++)
    {
        smallPicArray[i].className = '';
    }
    //当前小图显示红框
    (willShow == 5?smallPicArray[0]:smallPicArray[willShow]).className = 'current';

    //currentIndex记录,用户鼠标随意选中的图片索引
    currentIndex = willShow;
}

/**
 * 自动轮播,核心代码
 */
function autoPlay()
{
    timer = setInterval(function ()
    {
        currentIndex++;
        if(currentIndex == bigPicArray.length) currentIndex = 1;
        changePic(currentIndex);
    },2000);
}
/**
 * 鼠标移入:清除定时任务
 */
content.onmouseover = function () {
    clearInterval(timer);
};
/**
 * 鼠标移出:开始轮播
 */
content.onmouseout = function () {
    autoPlay();
};


autoPlay();


