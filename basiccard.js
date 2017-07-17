var fs = require('fs');

//Constructor accepts 2 arguments
var BasicCard = function(front, back){

	//Front contains front card text
	this.front = front;
	//Back contains back card text
	this.back = back;

	this.create = function(){

		//Create var with card data
		var cardData = {
			front : this.front,
			back : this.back,
			type: 'basic',
		};

		//Append card data to text file
		fs.appendFile('questions.txt', JSON.stringify(cardData) + ';','utf8', function(error){
			if(error){
				console.log(error);
			}
		})
	};

};

//Exports the constructor
module.exports = BasicCard;