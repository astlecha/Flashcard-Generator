//Requires basic js file
var BasicCard = require('./basiccard.js');
var ClozeCard = require('./clozecard.js');
var inquirer = require('inquirer');
var fs = require('fs');

var displayCards = function(){
	fs.readFile('questions.txt', 'utf8', function(error, data){
		if(error){
			console.log('Error occurred: '+error);
		}
		var questions = data.split(';');
		var count = 0;
		showCard(questions, count);
	})
}

var showCard = function(array, index){
	question = array[index]
}

var createCard = function(){

	inquirer.prompt([
		{
			type: 'input',
			name: 'front',
			message: 'What do you want on the front of your card?'
		}
	]).then(function(results){

		var newCard = new BasicCard(results.front, results.back);
	
	})
}