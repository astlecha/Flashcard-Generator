//Constructor accepts 2 arguments
var BasicCard = function(front, back){

	var questionCount = 0;

	//Front contains front card text
	this.front = front;
	//Back contains back card text
	this.back = back;
};

//Exports the constructor
module.exports = BasicCard;