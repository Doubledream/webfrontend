window.onload = function(){
	var clock = document.getElementById('clock');
	var context = clock.getContext("2d");
	var canWidth = clock.offsetWidth;
	var canHeight = clock.offsetHeight;
	getTime();
	// 修正一秒
	var angS = (getTime()[2] + 1) / 30 * Math.PI;
	var angM = getTime()[1] / 30 * Math.PI;
	// 获取时针起始的角度
	var angH = getTime()[0] / 6 * Math.PI + getTime()[1] / 360 * Math.PI;
	drawClock(context, angH, angM, angS);
	setInterval(function(){
		getTime();
		context.clearRect(0, 0, canWidth, canHeight);
		drawClock(context, angH, angM, angS);
		angH = angH === 2 * Math.PI ? 0 : angH + 1 / (30 * 60 * 60) * Math.PI;
		angM = angM === 2 * Math.PI ? 0 : angM + 1 / (30 * 60) * Math.PI;
		angS = angS === 2 * Math.PI ? 0 : angS + 1 / 30 * Math.PI;
	}, 1000);
}
// 获取当前时间
function getTime(){
	var time = document.getElementById("time");
	var date = new Date();
	time.innerHTML = date.getFullYear() + '年' + parseTwo(eval(date.getMonth() + 1)) + '月'
	               + parseTwo(date.getDate()) + '日 ' + parseTwo(date.getHours()) + ':'
	               + parseTwo(date.getMinutes()) + ':' + parseTwo(date.getSeconds());
	var hour = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
	return [hour, date.getMinutes(), date.getSeconds()];
}
// 转化为两位整数
function parseTwo(num){
	return num < 10 ? '0' + num : num;
}
// 根绝旋转角度和半径计算坐标
function getPos(ang, r){
	return [parseInt(100 + r * Math.sin(ang)), parseInt(100 - r * Math.cos(ang))];
}
// 填充数字
function fillNum(context){
	context.font = "bold 14px Arial";
	context.textAlign = "center";
	context.textBaseline = "middle";
	var ang = 2 * Math.PI;
	for (var i = 0; i < 12; i++){
		var num = 12 - i;
		context.fillText(num, getPos(ang, 85)[0], getPos(ang, 85)[1]);
		ang -= 1 / 6 * Math.PI;
	}
}
// 绘制钟表
function drawClock(context, angH, angM, angS){
	context.beginPath();
	// 绘制外圆
	context.arc(100, 100, 99, 0, 2 * Math.PI, false);
	// 绘制内圆
	context.moveTo(194, 100);
	context.arc(100, 100, 94, 0, 2 * Math.PI, false);
	// 绘制秒针
	context.moveTo(100, 100);
	context.lineTo(getPos(angS, 85)[0], getPos(angS, 85)[1]);
	// 绘制分针
	context.moveTo(100, 100);
	context.lineTo(getPos(angM, 70)[0], getPos(angM, 70)[1]);
	// 绘制时针
	context.moveTo(100, 100);
	context.lineTo(getPos(angH, 55)[0], getPos(angH, 55)[1]);
	// 描绘路径
	context.stroke();
	fillNum(context);
}
