window.onload = function(){
	var clock = document.getElementById('clock');
	getTime();
	if (clock.getContext) {
		var context = clock.getContext("2d");
		context.beginPath();
		// 绘制外圆
		context.arc(100, 100, 99, 0, 2 * Math.PI, false);
		// 绘制内圆
		context.moveTo(194, 100);
		context.arc(100, 100, 94, 0, 2 * Math.PI, false);
		// 绘制分针
		context.moveTo(100, 100);
		context.lineTo(100, 15);
		// 绘制时针
		context.moveTo(100, 100);
		context.lineTo(35, 100);
		// 描绘路径
		context.stroke();
		fillNum(context);
	}
	setInterval(getTime, 1000);
}

function getTime(){
	var time = document.getElementById("time");
	var date = new Date();
	time.innerHTML = date.getFullYear() + '年' + parseTwo(eval(date.getMonth() + 1)) + '月'
	               + parseTwo(date.getDate()) + '日 ' + parseTwo(date.getHours()) + ':'
	               + parseTwo(date.getMinutes()) + ':' + parseTwo(date.getSeconds());
}

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
