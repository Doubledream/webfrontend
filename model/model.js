window.onload = function(){
	var showbtn = getElement('showModel'),
			closebtn1 = getElement('close1'),
			closebtn2 = getElement('close2'),
			mask = getElement('mask');
	EventHandle(showbtn, 'click', showModel);
	EventHandle(closebtn1, 'click', closeModel);
	EventHandle(closebtn2, 'click', closeModel);
	EventHandle(mask, 'click', closeModel);
	//显示model
	function showModel(){
		var model = getElement('model');
		getElement('mask').style.display = 'block';
		model.style.display = 'block';
		model.style.transition = 'all 2s';
	}
	//关闭model
	function closeModel(){
		getElement('mask').style.display = 'none';
		getElement('model').style.display = 'none';
	}
}
//获取对象
function getElement(id){
	return document.getElementById(id);
}
//注册事件
function EventHandle(el, type, handler){
	if (el.addEventListener){
		el.addEventListener(type, handler, false);
	} else if (el.attachEvent){
		el.attachEvent('on' + type, handler);
	} else {
		el['on' + type] = handler;
	}
}
