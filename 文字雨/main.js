/**
 * Created by myj on 2016/9/24.
 */

/*
* 页面添加内容:
*       (1)文字雨特效(用html5新特性canvas实现)
*       (2)登陆窗口(用div等元素实现)
*/

/* (1)文字雨特效,步骤及思路:
*       <1>html布局结构
*       <2>css样式修饰
*       <3>js实现特效(☆☆☆☆☆)
*/

/*
* (2)登陆窗口,步骤及思路:
*       <1>html布局结构
*       <2>css样式修饰(☆☆)
*       <3>js实现交互&&验证(☆☆☆)
* */

/*定义全局变量*/
var fontSize  = 20;/*文字大小*/
var str = 'abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+P{}:">?';
var columns ;/*总列数*/
var locs = [];//每一列文字的位置
var canvas;
var ctx;

/**
 * 功能： 对canvas（文字雨特效）的实现 做一些初始化工作
 */
function init()
{
    /*设置画布的宽高*/
    canvas = document.getElementById('c');
    canvas.width = innerWidth;
    canvas.height = innerHeight;

    /*取出画笔*/
    ctx = canvas.getContext('2d');
    ctx.font = fontSize +'px Arial';
    columns = innerWidth/fontSize;/*总列数*/

    for(var i = 0;i < columns;i++)
    {
        locs[i] = 0;
    }

}

init();
setInterval(drop,50);

/**
 * 功能：文字下落
 */
function drop()
{
    /*绘制整个屏幕为黑色*/
    ctx.fillStyle = 'rgba(0,0,0,0.1)';
    ctx.fillRect(0,0,innerWidth,innerHeight);

    /*绘制绿色文字*/
    ctx.fillStyle = '#0f0';
    for(var i = 0;i < columns;i++)
    {
        var index = Math.floor(Math.random()*45);/*随机的位置index*/
        ctx.fillText(str[index],i*fontSize,locs[i]*fontSize);
        locs[i]++;
        if(locs[i]*fontSize > innerHeight && Math.random()>0.9)
        {
            locs[i] = 0;
        }
    }
}



/*登录窗口的控制*/

/*设置login窗口的位置*/
var login = document.getElementById('login');
login.style.left = (innerWidth-login.clientWidth)/2 + 'px';
login.style.top = (innerHeight-login.clientHeight)/2 + 'px';

/*获取输入框，验证按钮*/
var password = document.getElementById('password');
var submit = document.getElementById('submit');
var error = document.getElementById('error');


/*按钮点击，执行验证*/
submit.onclick = function () {
    /*密码正确*/
    if(password.value == 'admin')
    {
        /*登录login窗口消失*/
        login.style.opacity = '0';
        /*文字雨特效消失*/
        $('canvas').animate({width:innerWidth,height:'0px'},700);
    }
    else
    {
        error.style.display = 'block';/*出现密码错误 提示*/
    }
};

/*点击window窗口 出现 login窗口*/
window.onclick = function () {
    login.style.opacity = '1';
    password.focus();
    window.onclick = null;
}