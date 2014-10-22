function Counter(params) {
	var counterContainer = $(params['htmlEl']);
	var startValue = params['startValue'] ? params['startValue'] : 0;
	var maxValue = params['maxValue'] ? params['maxValue'] : 300;
	var callback = params['callback'] ? params['callback'] : null;
	var currnentValue = startValue;
	var intervalFun;
	var status = 'STOPPED';
	counterContainer.html(startValue);

	this.start = function() {
		if(status === 'STARTED') {
			return;
		} else {
			currnentValue = startValue;
		}
		parentScope = this;
		intervalFun = setInterval(function() {incrementCounter(callback, parentScope)}, 1000);
		status = 'STARTED';
	}

	this.stop = function() {
		clearInterval(intervalFun);
		status = 'STOPPED';
	}

	this.reset = function() {
		if(status === 'STARTED') {
			this.stop();
			status = 'STARTED';
		}

		currnentValue = startValue;
		counterContainer.html(currnentValue);

		if(status === 'STARTED') {
			status = 'RESETED';
			this.start();
		}
	}

	this.setStartValue = function(newStartValue) {
		startValue = parseInt(newStartValue);
	}

	this.getCurrentValue = function() {
		return currnentValue;
	}
	
	function incrementCounter (callback, parentScope) {
		currnentValue = currnentValue + 1;
		counterContainer.html(currnentValue);
		if(callback) {
			callback(parentScope);
		}
	}
}