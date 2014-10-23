var simpleDate;

(function () {
	var year,
		month,
		day;
	simpleDate = function() {
		var now = new Date();

		this.year = (now.getYear()+1900).toString();
		
		var tmpM = now.getMonth();
		if (tmpM+1 < 10) {
			var smallM = (tmpM+1).toString();
			this.month = '0'+ smallM;
		}
		else {
			this.month = (now.getMonth()+1).toString();
		}
		var tmpD = now.getDate();
		if (tmpD < 10) {
			var smallD = tmpD.toString();
			this.day = '0'+ smallD;
		}
		else {
			this.day = now.getDate().toString();
		}
	}

	simpleDate.prototype.getYear = function() {
		return this.year;
	}

	simpleDate.prototype.getMonth = function() {
		return this.month;
	}

	simpleDate.prototype.getDay = function() {
		return this.day;
	}

})();
