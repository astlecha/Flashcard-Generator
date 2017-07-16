//Requires basic js file
var BasicCard = require('./basiccard.js');

//Creates a ClozeCard constructor
var ClozeCard = function(text, cloze){
	this.text = text;
};

//Exports the constructor
module.exports = ClozeCard;