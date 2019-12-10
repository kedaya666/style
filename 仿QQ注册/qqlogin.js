/**
 * Created by myj on 2016/10/29 0029.
 */
$(".like").find("input").focus(function(){
    $(this).val("")
});
$(".like").find("input").blur(function(){
    $(this).val("输入想要的4-10位数字")
});

$("form :input").blur(function(){
    $(this).parent().find(".error").remove();
    //用户名验证
    if($(this).is("#username")){
        if(this.value=="" || this.value.length<8) {
            var t = $("<b class='error'>用户名输入错误</b>");
            $(this).parent().append(t);
            $(this).addClass("red");
        }
        else{
            var t=$("<b class='rigt'>正确</b>");
            $(this).parent().append(t);
        }
    };
    //密码验证
    if($(this).is("#password")){
        if(this.value==""){
            var t=$("<b class='error'>密码不能为空</b>");
            $(this).parent().append(t);
            $(this).addClass("red");
        }
        else{
            var t=$("<b class='rigt'>正确</b>");
            $(this).parent().append(t);
        }
    };
    if($(this).is("#password1")){
        if(this.value=="" || this.value!=$("#password").val()){
            var t=$("<b class='error'>两次密码输入不一致</b>");
            $(this).parent().append(t);
            $(this).addClass("red");
        }
        else{
            var t=$("<b class='rigt'>正确</b>");
            $(this).parent().append(t);
        }
    };
    //手机验证
    if($(this).is("#tel")){
        if(this.value=="" || this.value.length!=11){
            var t=$("<b class='error'>手机号码不正确</b>");
            $(this).parent().append(t);
        }
        else{
            var t=$("<b class='rigt'>正确</b>");
            $(this).parent().append(t);
        }
    };
    //按钮验证
    $(".btn").click(function(){
        if($(".error").length==0){
            alert("注册成功");
        }
        else{
            alert("注册失败");
        }
    });
});
var sex=document.getElementsByName("sex");//性别
sex[0].checked=true;//设置是否被选中






