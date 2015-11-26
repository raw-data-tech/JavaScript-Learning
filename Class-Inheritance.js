'use strict'
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


var Man = function (name) {
	this.name = name;
	this.sayHai = function(){
		console.log('Hai I am '+this.name);
	};
};

var Student = function(name,className){
	Man.call(this,name);
	this.class = className;
	this.sayHai = function(){
		console.log('Hai I am '+this.name+' from '+this.class);	
	};
};

rl.question("Are you a Student? (Y/N)", function(answer) {
	newUser(answer,function(user){
		user.sayHai();
	});
});


function newUser(answer,fn){
	switch(answer){
		case 'Y':
		case 'y':
			rl.question("What is your name?", function(name) {
				rl.question("Enter your batch and department:", function(className) {
				var User = new Student(name,className);
				rl.close();
				fn(User);
				});	
			});
			break;
		case 'N':
		case 'n':
			rl.question("What is your name?", function(name) {
				var User = new Man(name);
				rl.close();
				fn(User);
			});
			break;
	}

}

