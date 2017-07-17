var fs = require('fs');

//Requires basic js file
var BasicCard = require('./basiccard.js');

//Creates a ClozeCard constructor
var ClozeCard = function(text, cloze){
	this.text = text;
	this.cloze = cloze;
	this.clozeDeleted =;
	this.create = function(){
		var cardData = {
			type : 'cloze',
			text : this.text,
			cloze : this.cloze,
			clozeDeleted: this.clozeDeleted;
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
module.exports = ClozeCard;