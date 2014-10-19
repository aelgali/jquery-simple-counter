function Counter(params) {
	// {counterHtml, currValue, stValue}

	var counterContainer = $(params['htmlEl']);
	var startValue = params['startValue'];
	var maxValue = params['maxValue']? params['maxValue'] : 300;
	var callback = params['callback']? params['callback'] : null;
	var currnentValue = startValue;
	var intervalFun;
	counterContainer.html(startValue);

	this.start = function() {
		parentScope = this;
		intervalFun = setInterval(function() {incrementCounter(callback, parentScope)}, 1000);
	}

	this.stop = function() {
		clearInterval(intervalFun);
	}
	function incrementCounter (callback, parentScope) {
		currnentValue = currnentValue + 1;
		counterContainer.html(currnentValue);
		if(callback) {
			callback(parentScope);
		}
	}
}