/**
 * Created by myj on 2016/11/28.
 */

//获取canvas（画布）
var canvas = document.getElementById('c');

//获取ctx（画笔）
var ctx = canvas.getContext('2d');

//保存所有的彩球
var balls = [];


/**
 * 初始化画布
 */
function init()
{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

/**
 * 小球模型：描述了作为一个小球应该具备的属性，方法（功能）
 * @constructor
 */
function Ball()
{
    //基本属性
    this.x = 0.5*window.innerWidth;
    this.y = 0.8*window.innerHeight;//x，y决定了球的初始位置
    this.radius = 10;//球的半径
    this.ballColor = 'rgba('+(Math.floor(Math.random()*256))+','+(Math.floor(Math.random()*256))+','+(Math.floor(Math.random()*256))+',1)';//球的颜色是随机的 ,比如： rgba(100,10,255,1)
    this.xGrown = Math.random()*5*(Math.random()>0.5?1:-1);//水平方向的移动幅度
    this.yGrown = -9;//垂直方向的移动幅度

    //基本方法（函数，功能）
    //1.改变位置
    this.changeLocation = function () {
        this.x += this.xGrown;
        this.yGrown += 0.1;
        this.y += this.yGrown;
    };
    //2.绘制自己
    this.drawBall = function () {
        ctx.beginPath();
        ctx.fillStyle = this.ballColor;//设置画笔的颜色
        ctx.arc(this.x,this.y,this.radius,0,Math.PI*2);
        ctx.fill();
        ctx.closePath();
    };
}

/**
 * 让所有的小球移动
 */
function move()
{
    //根据模型，创建彩球；并将彩球保存在balls中
    var ball = new Ball();
    balls.push(ball);

    //擦除小球的旧痕迹
    ctx.clearRect(0,0,window.innerWidth,window.innerWidth);

    for(var i = 0;i < balls.length;i++)
    {
        balls[i].changeLocation();
        balls[i].drawBall();
    }

}

init();
setInterval(move,30);

