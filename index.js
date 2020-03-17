$("#username .userinput").blur(function() {
    var val = $(this).val();
    var reg = /^[0-9]+.?[0-9]*$/;
    if(val == "") {
        $("#username .errortip").html("用户名不能为空！");
        return;
    }
    if(val.length > 10) {
        $("#username .errortip").html("用户名长度不能超过10位！");
        return;
    }
    if(reg.test(val)) {
        $("#username .errortip").html("用户名不能为纯数字");
        return;
    }
    $("#username .errortip").html("");
    $("#username .sucesstip").css("display", "block");
})

$("#phone .userinput").blur(function() {
    var val = $(this).val();
    var reg = /^1[3456789]\d{9}$/;
    if(val == "") {
        $("#phone .errortip").html("手机号码不能为空！");
        return;
    }
    if(val.length != 11) {
        $("#phone .errortip").html("手机号码应为11位！");
        return;
    }
    if(!reg.test(val)) {
        $("#phone .errortip").html("手机号码格式不正确");
        return;
    }
    $("#phone .errortip").html("");
    $("#phone .sucesstip").css("display", "block");
})

$("#pwd .userinput").blur(function() {
    var val = $(this).val();
    var reg = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/;
    if(val == "") {
        $("#pwd .errortip").html("密码不能为空！");
        return;
    }
    if(!reg.test(val)) {
        $("#pwd .errortip").html("密码格式不正确");
        return;
    }
    $("#pwd .errortip").html("");
    $("#pwd .sucesstip").css("display", "block");
})
var count = 60;
$(".passbutton").click(function() {
    $(this).attr("disabled", true);
    var intervalId = setInterval(function() {
        $(".passbutton").val(count -= 1);
        if(count == 0) {
            clearInterval(intervalId);
        }
    }, 1000);
})