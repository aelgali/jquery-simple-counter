function Counter(params) {
	var counterContainer = $(params['htmlEl']);
	var startValue = params['startValue'];
	var maxValue = params['maxValue']? params['maxValue'] : 300;
	var callback = params['callback']? params['callback'] : null;
	var currnentValue = startValue;
	var intervalFun;
	var status = 'STOPPED';

	counterContainer.html(startValue);

	this.start = function() {
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
			this.start();
		}
	}

	function incrementCounter (callback, parentScope) {
		currnentValue = currnentValue + 1;
		counterContainer.html(currnentValue);
		if(callback) {
			callback(parentScope);
		}
	}
}