'use strict';

module.exports = function() {

	var formData = [];

	this.getData = function(){
		return formData;
	};

	this.setData = function(newdata){
		formData.push(newdata);
	};

};
