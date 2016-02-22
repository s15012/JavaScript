/**
 * Created by s15012 on 16/02/08.
 */
/**
 * Created by s15012 on 16/01/18.
 */
$(function () {
    var canvas = $("#arc").get(0);
    var ctx = canvas.getContext("2d");

    ctx.beginPath();  //描画開始
    ctx.moveTo(25,25);  //描画開始位置
    ctx.lineTo(275,25);
    ctx.lineTo(275,275);
    ctx.lineTo(25,275);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    var TopstartAngle = 0;
    var TopendAngle = 180 * Math.PI / 180;
    ctx.arc(150,25,125,TopstartAngle, TopendAngle,false);
    ctx.closePath();

    var RightstartAngle = 90 * Math.PI / 180;
    var RightendAngle = 270 * Math.PI / 180;
    ctx.arc(275, 150, 125, RightstartAngle, RightendAngle, false);
    ctx.closePath();

    var BottomstartAngle = 180 * Math.PI / 180;
    var BottomendAngle = 360 * Math.PI / 180;
    ctx.arc(150, 275, 125, BottomstartAngle, BottomendAngle, false);
    ctx.closePath();

    var LeftstartAngle = 270 * Math.PI / 180;
    var LeftendAngle = 90 * Math.PI / 180;
    ctx.arc(25, 150, 125, LeftstartAngle, LeftendAngle, false);
    ctx.closePath();

    ctx.stroke();
    ctx.fill();
    //描画表示

});
