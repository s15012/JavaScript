/**
 * Created by s15012 on 16/01/18.
 */
$(function () {
    var canvas = $("#TriForce").get(0);
    var ctx = canvas.getContext("2d");

    ctx.beginPath();  //描画開始
    ctx.moveTo(50, 75);  //描画開始位置
    ctx.lineTo(150, 75);  //描画移動位置
    ctx.lineTo(100, 0);
    ctx.lineTo(0, 150);
    ctx.lineTo(200, 150);
    ctx.lineTo(150, 75);
    ctx.lineTo(100, 150);
    ctx.closePath();
    ctx.stroke();
    ctx.fillStyle = 'yellow';
    ctx.fill();

});
