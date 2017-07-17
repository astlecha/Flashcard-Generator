//Constructor accepts 2 arguments
var BasicCard = function(front, back){

	//Front contains front card text
	this.front = front;
	//Back contains back card text
	this.back = back;

	this.create = function(){

		frontArr.forEach(function callback(currentValue, index, array){
			inquirer.prompt([
				{
					type: 'input',
					name: index+1,
					message: currentValue
				}
			]).then(function(cardData){
				console.log(cardData.message);
				console.log(cardData);
			});
		});

	};

};

//Exports the constructor
module.exports = BasicCard;