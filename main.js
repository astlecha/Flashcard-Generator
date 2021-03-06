//Requires basic js file
var BasicCard = require('./basiccard.js');
var ClozeCard = require('./clozecard.js');
var inquirer = require('inquirer');
var fs = require('fs');

var initialChoice = function(){
	//Allow user to either make BasicCard or display all cards.
	inquirer.prompt([
		{
			type: 'list',
			name: 'firstOption',
			message: 'What would you like to do?',
			choices: [{ name : 'new-card'},{ name : 'go-through-deck'}]
		}
	]).then(function(answer){
		if(answer.firstOption==='new-card'){
			createCard();
		}
		else if(answer.firstOption==='go-through-deck'){
			displayCards();
		}
	});
}

var createCard = function(){
	inquirer.prompt([
		{
			type: 'input',
			name: 'front',
			message: 'What do you want on the front of your card?',
			//Make sure user entered a value.
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
			//Make sure user entered a value.
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
		//Create new card by inserting inquirer results into constructor function.
		var newCard = new BasicCard(results.front, results.back);
		newCard.create();
		console.log('\n-------\nYour card was added to the stack!\n-------\n');
		initialChoice();
	})
};

var displayCards = function(){
	fs.readFile('questions.txt', 'utf8', function(error, data){
		if(error){
			console.log('Error occurred: '+error);
		}
		//Split questions on the text file by semicolon.
		var questions = data.split(';');
		var count = 0;
		showCard(questions, count);
	})
}

var showCard = function(array, index){
	question = array[index];
	//Parse strings from questions.txt
	var parsedQuestion = JSON.parse(question);
	var cardFront;
	var cardBack;
	//Assign front and back values from questions.txt
	if(parsedQuestion.type==='basic'){
		cardFront = parsedQuestion.front;
		cardBack = parsedQuestion.back;
	}
	else if(parsedQuestion.type==='cloze'){
		cardFront = parsedQuestion.clozeDeleted;
		cardBack = parsedQuestion.cloze;
	}

	// for(var i=0; i<)
	//Show front of card
	inquirer.prompt([
		{
			name: 'response',
			message: 'Card ' + (index+1) + ': ' + cardFront,
		}
	]).then(function(answer){
		//Check if user's answer matches back of card
		if(answer.response===cardBack){
			console.log('Good job!');
			if (index < array.length - 1) {
            	showCard(array, index + 1);
            }
		}
		else{
			console.log('Incorrect.');
			if (index < array.length - 1) {
            	showCard(array, index + 1);
            }
		}
	})
};

//Start our Flashcard-Generator app!
initialChoice();