/* */

const user1 = {
	name: "Borna",
	score: 3,
	increment: function(){
		user1.score++;
	}
}
user1.increment();

const user2 = {}; //create an empty object
user2.name = "Tim"; //assign properties to that object
user2.score = 6;
user2.increment = function() {
  user2.score++;
};

const user3 = Object.create(null);
user3.name = "Eva";
user3.score = 9;
user3.increment = function() {
  user3.score++;
};

function userCreator(name, score) {
  const newUser = {};
  newUser.name = name;
  newUser.score = score;
  newUser.increment = function() {
    newUser.score++;
  };
  return newUser;
};
const user1 = userCreator("Will", 3);
const user2 = userCreator("Tim", 5);



function userCreator (name, score) {
  const newUser = Object.create(functionStore);
  newUser.name = name;
  newUser.score = score;
  return newUser;
};
const functionStore = {
  increment: function(){this.score++;},
  login: function(){console.log("You're loggedin");}
};
const user1 = userCreator("Will", 3);
const user2 = userCreator("Tim", 5);
user1.increment();


function UserCreator(name, score){
  this.name = name;
  this.score = score;
}
// Make sure to capture UserCreator as a function and object
UserCreator.prototype.increment = function(){
	this.score++;
};
UserCreator.prototype.login = function(){
	console.log("login");
};
const user1 = new UserCreator(“Will”, 3)



class UserCreator {
	constructor (name, score){
		this.name = name;
		this.score = score;
	}
	increment (){
		this.score++;
		console.log(this.score)
	}
	decrement (){
		this.score--;
		console.log(this.score)
	}
	login (){
		console.log("login");
	}
}
const user1 = new UserCreator("Eva", 9);
user1.increment();



const person = {
	name: "will",
	comapny: "Codesmith",
	favNum: 17,
	favSnacks: ["Twin", "Gumm", "Hot"],
	greeting: function(){
		console.log("hello")
	}
}

function personFile(emp){
	const employeKey = Object.key()
}




