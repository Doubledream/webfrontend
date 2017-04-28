var calendar = function(){
	this.year;
	this.month;
}
calendar.prototype.init = function(year, month){
	var today = new Date();
	this.year = year || today.getFullYear();
	this.month = month || today.getMonth() + 1;
};
calendar.prototype.setCalendar = function(){
	var today = new Date();
	var monthDay = 0;
	var firstDay = getFirstDay(this.year, this.month);
	switch(this.month){
		case 1: monthDay = 31;break;
		case 2:
			if(runNian(this.year)){
				monthDay = 29;
			}else{
				monthDay = 28;
			}
			break;
		case 3: monthDay = 31;break;
		case 4: monthDay = 30;break;
		case 5: monthDay = 31;break;
		case 6: monthDay = 30;break;
		case 7: monthDay = 31;break;
		case 8: monthDay = 31;break;
		case 9: monthDay = 30;break;
		case 10: monthDay = 31;break;
		case 11: monthDay = 30;break;
		case 12: monthDay = 31;break;
	}
	var tds = document.getElementsByTagName('td');
	for (var i = firstDay; i < monthDay + firstDay; i++){
		tds[i].innerHTML = i - firstDay + 1;
	}
  var markYear = today.getFullYear();
  var markMonth = today.getMonth() + 1;
  if (markYear === this.year && markMonth === this.month){
  	var markDay = today.getDate();
  	addClass(tds[markDay + firstDay - 1], 'current');
  }
};
function addClass(el, name){
	if (el.className) {
		el.className += ' ' + name;
	}else {
		el.className = name;
	}
}
function runNian(year){
	if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)){
		return true;
	}else{
		return false;
	}
}
function getFirstDay(year, month){
	var allDay = 0,
			y = year - 1,
			i = 1;
	allDay = y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) + 1;
	for (; i < month; i++){
		switch(i){
			case 1: allDay += 31;break;
			case 2:
				if(runNian(year)){
					allDay += 29;
				}else{
					allDay += 28;
				}
				break;
			case 3: allDay += 31;break;
			case 4: allDay += 30;break;
			case 5: allDay += 31;break;
			case 6: allDay += 30;break;
			case 7: allDay += 31;break;
			case 8: allDay += 31;break;
			case 9: allDay += 30;break;
			case 10: allDay += 31;break;
			case 11: allDay += 30;break;
			case 12: allDay += 31;break;
		}
	}
	return allDay % 7;
}

var Calendar = new calendar();