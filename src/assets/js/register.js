//label上移
$(".reg-body").on("mouseleave", "input", function () {
    //console.log($(this).val());
    if ($(this).val() !== "") {
        $(this).prev("label").addClass("label-hold");
    } else {
        $(this).prev("label").removeClass("label-hold");
    }
})

//正则验证
$(".reg-body").on("mouseover", "input", function () {
    if ($(this).parent().hasClass("wrong"))
        $(this).parent().removeClass("wrong").children("div").hide();
    if ($(this).parent().hasClass("correct"))
        $(this).parent().removeClass("correct");
})
var check = function ($reg, $this) {
    let $str = $this.val();
    if($reg.test($str)){
        $this.parent().addClass("correct");
    }else{
        $this.parent().addClass("wrong").children("div").show();
    }
}
//用户名
$(".reg-name input[name='uname']").hover(
    function () {
        $(this).attr("placeholder", "请输入3-8位用户名");
    },
    function () {
        check(/^[0-9A-Za-z]{3,8}$/, $(this));
        $(this).attr("placeholder", "");
        $(this).val() === "" ? $(this).next().children("span").html("用户名不能为空") : $(this).next().children("span").html("格式错误");
    }
)
//密码
$(".reg-pwd input[name='upwd']").keyup(function(){
    //console.log($(this).val());
    let reg3=/^(?:\d+|[a-zA-Z]+|[!@#$%^&*]+)$/,
        reg2=/^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*]+$)[a-zA-Z\d!@#$%^&*]+$/,
        reg1=/^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*]+$)(?![a-zA-z\d]+$)(?![a-zA-z!@#$%^&*]+$)(?![\d!@#$%^&*]+$)[a-zA-Z\d!@#$%^&*]+$/,
        reg0=/^[0-9a-zA-Z!@#$%^&*']{6,18}$/;
    var str=$(this).val();
    if(reg3.test(str)){
        $(this).nextAll(".pwd-strength").show();
        $(this).nextAll(".pwd-strength").addClass("weak-color");
    }else if(reg2.test(str)){
        $(this).nextAll(".pwd-strength").show();
        $(this).nextAll(".pwd-strength").addClass("normal-color");
    }else if(reg1.test(str)){
        $(this).nextAll(".pwd-strength").show();
        $(this).nextAll(".pwd-strength").addClass("strong-color");
    }else if(!reg0.test(str)){
        $(this).parent().addClass("wrong").children(".reg-tips-box").show();
    }
})
$(".reg-pwd input[name='upwd']").hover(
    function () {
        $(this).attr("placeholder", "请输入6-18位密码，可包含标点符号");
    },
    function () {
        // /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*?]).*$/ 至少6位 需要包含小写字母大写字母 数字 特殊符号
        //check(/^/,$(this));
        $(this).attr("placeholder", "");
        $(this).val() === "" ? $(this).parent().addClass("wrong").children(".reg-tips-box").show().children("span").html("密码不能为空") : $(this).next().children("span").html("格式错误");
    }
)
$(".reg-cpwd input[name='cpwd']").hover(
    function () {
        $(this).attr("placeholder", "请再次输入密码");
    },
    function () {
        //console.log($(this).val(),$("input[name='upwd']").val());
        $(this).attr("placeholder", "");
        $(this).val() === "" ? $(this).parent().addClass("wrong").children("div").show().children("span").html("此处不能为空") : (
            $(this).val() !== $("input[name='upwd']").val() ? $(this).parent().addClass("wrong").children("div").show().children("span").html("两次密码不同") : $(this).parent().addClass("correct"));
    }
)
//电话
$(".reg-phone input[name='phone']").hover(
    function () {
        $(this).attr("placeholder", "请输入电话号码");
    },
    function () {
        check(/^[1][3,5,7,8,9][0-9]{9}$/, $(this));
        $(this).attr("placeholder", "");
        $(this).val() === "" ? $(this).next().children("span").html("手机号不能为空") : $(this).next().children("span").html("格式错误");
    }
)
//邮箱
$(".reg-email input[name='email']").hover(
    function () {
        $(this).attr("placeholder", "请输入邮箱地址");
    },
    function () {
        check(/^([a-z0-9\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2,3})?)$/, $(this));
        $(this).attr("placeholder", "");
        $(this).val() === "" ? $(this).next().children("span").html("邮箱不能为空") : $(this).next().children("span").html("格式错误");
    }
)
