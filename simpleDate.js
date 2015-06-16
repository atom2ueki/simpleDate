"use strict";

var simpleDate = function (date) {
	this.date = date;
};

simpleDate.prototype.getYear = function() {
	var date =this.date
	var year = (date.getYear()+1900).toString();
	return year;
};

simpleDate.prototype.getMonth = function() {
	var date =this.date
	var month;
	var tmpM = date.getMonth();
	if (tmpM+1 < 10) {
		var smallM = String(tmpM+1);
		month = '0'+ smallM;
	}
	else {
		month = String(date.getMonth()+1);
	}
	return month;
};

simpleDate.prototype.getDay = function() {
	var date =this.date
	var day;
	var tmpD = date.getDate();
	if (tmpD < 10) {
		var smallD = tmpD.toString();
		day = '0'+ smallD;
	}
	else {
		day = date.getDate().toString();
	}
	return day;
};

simpleDate.prototype.getYYMMDD = function() {
	var date =this.date;
	var tempDate = new simpleDate(date);
	return tempDate.getYear()+'-'+tempDate.getMonth()+'-'+tempDate.getDay();
}
