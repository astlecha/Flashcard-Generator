//Constructor accepts 2 arguments
var BasicCard = function(front, back){

	var questionCount = 0;

	//Front contains front card text
	this.front = front;
	//Back contains back card text
	this.back = back;

	if(questionCount < 10){
		inquirer.prompt([
			{
				type: 'input',
				name: 'front',
				message: 'What is the capital of California?'
			}
		]).then(function(answers)){
			questionCount++;
		}
	}
};



//Exports the constructor
module.exports = BasicCard;