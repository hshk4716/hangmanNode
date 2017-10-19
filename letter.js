
var letter = function(letz){
	this.charac = letz;
	this.appear = false;
	this.letterRender = function(){
		return !(this.appear) ? "_" : this.charac;
	};
};


module.exports = letter;