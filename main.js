//Requires basic js file
var BasicCard = require('./basiccard.js');
var ClozeCard = require('./clozecard.js');
var inquirer = require('inquirer');
var fs = require('fs');

inquirer.prompt([
	{
		type: 'list',
		name: 'firstOption',
		message: 'What would you like to do?',
		choices: [{ name : 'new-card'},{ name : 'display-cards'}]
	}

]).then(function(answer){
	if(answer.firstOption==='new-card'){
		createCard();
	}
	else if(answer.firstOption==='display-cards'){
		displayCards();
	}
});

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
	question = array[index];
	var parsedQuestion = JSON.parse(question);
	var text;
	var correctAnswer;
}

var createCard = function(){
	inquirer.prompt([
		{
			type: 'input',
			name: 'front',
			message: 'What do you want on the front of your card?',
			validate: function(input){
				if(input===''){
					console.log('Please enter something.')
					return false;
				} else{
					return true;
				}
			}
		}, {
			type: 'input',
			name: 'back',
			message: 'What do you want on the back of your card?',
			validate: function(input){
				if(input===''){
					console.log('Please enter something.')
					return false;
				} else{
					return true;
				}
			}
		}
	]).then(function(results){
		var newCard = new BasicCard(results.front, results.back);
		newCard.create();
	})
};


var nextAction = function(){
	inquirer.prompt([
		{
			type: 'list',
			name: 'selectNext',
			message: 'What next?',
			choices: [],
		}
	]).then(function(answer){

	})
}