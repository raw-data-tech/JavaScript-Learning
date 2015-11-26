'use strict'

/*
	When ever we creates a Class , that means we are creating our own data type for some purpose. And It should be re-usable.
	For making it re-usable, we have to make sure that we are not using any input/output operations in the class.

	Class is always just a blue print of an Object that we need to create, and is like a 'Plan' for a 'House'. 
*/




//node module for getting input values from CLI
var readline = require('readline');

//initializing read-line object
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//A new Class/prototyping in js for creating an object with a member function and a member variable 
var Man = function (name) {

	//here this keyword is used to represent the 'this instance' of the class.
	this.name = name;
	this.sayHai = function(){
		console.log('Hai I am '+this.name);
	};
};


/*Another class by inheriting the first class and implemented function overloading
you can see the sayHai function is overloaded here to implement some other datas to the out put.*/
var Student = function(name,className){
	/*this is how we inherit another class, in java we uses the 'extends' key word for this purpose.
	here we sends 'this' object as first arguiment to the context of the parent class and then the 'Man' class will execute in same 
	memory location of the sub class 'Student'.
	*/
	Man.call(this,name);

	//here we gives extra attributes that we need for the Student type objects
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

