//parent class
function Controller(){
	this.error = []
}
Controller.prototype.showDialog = function(title, msg) {
	// body...
};
Controller.prototype.success = function(msg) {
	this.showDialog("Succes", msg);
};
Controller.prototype.failure = function(err) {
	this.errors.push( err );
	this.showDialog("Error", err );
};
//child class
function LoginController() {
	Controller.call( this )
}
LoginController.prototype = Object.create(Controller.prototype);

LoginController.prototype.getUser = function() {
	return document.getElementById('login_username')
};
LoginController.prototype.getPasssword = function() {
	return document.getElementById('login_password')
};
LoginController.prototype.validateEntry = function(user, pw) {
	user = user || this.getUser();
	pw = pw || this.getPassword();

	if(!(user && pw)){
		return this.failure("Please enter user name and password")
	}else if(pw.lenght < 5){
		return this.failure("Password must be 5+ characters!")
	}
	//got here? validated!
	return true
};
//override to extend base failure()
LoginController.prototype.failure = function(err) {
	// super call
	Controller.prototype.failure.call(this, "login invalidate :" + err);
};
//chiled class
function AuthController(login){
	Controller.call( this );
	//in addition to inheritance, we also need composition
	this.login = login;
}
//link child class to parent
AuthController.prototype = Object.create(Controller.prototype)

AuthController.prototype.server = function(url, data){
	return $.ajax({
		url:url,
		data: data
	});
};
AuthController.prototype.checkAuth = function() {
	var user = this.login.getUser();
	var pw = this.login.getPassword()

	if(this.login.validateEntry(user, pw)){
		this.server("/check-auth", {
			use = user,
			pw = pw
		}).then(this.success.bind( this ))
		.fail(this.failure.bind( this ))
	}
};
//override to exted base success()
AuthController.prototype.success = function(){
	Controller.prototype.success.call( this, "Authenticted!" )
}
//override to exted base failure()
AuthController.prototype.failure = function(err) {
	// super call
	Controller.prototype.failure.call( this, "Auth fail :" + err)
};

var auth = new AuthController(
	//in addition to inheritance, we also need composition
	new LoginController()
	);

auth.checkAuth();



///////////////////////////////////
/////////////////////////////////

class User {

  constructor(name) {
    // invokes the setter
    this.name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (value.length < 4) {
      alert("Name is too short.");
      return;
    }
    this._name = value;
  }

}

let user = new User("John");
alert(user.name); // John

user = new User(""); // Name too short.




// "Named Class Expression" (alas, no such term, but that's what's going on)
let User = class MyClass {
  sayHi() {
    alert(MyClass); // MyClass is visible only inside the class
  }
};

new User().sayHi(); // works, shows MyClass definition

alert(MyClass); // error, MyClass not visible outside of the class

class Article {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }

  static compare(articleA, articleB) {
    return articleA.date - articleB.date;
  }
}

// usage
let articles = [
  new Article("Mind", new Date(2016, 1, 1)),
  new Article("Body", new Date(2016, 0, 1)),
  new Article("JavaScript", new Date(2016, 11, 1))
];

articles.sort(Article.compare);

alert( articles[0].title ); // Body








class MyClass {
  constructor(...) {
    // ...
  }
  method1(...) {}
  method2(...) {}
  get something(...) {}
  set something(...) {}
  static staticMethod(...) {}
  // ...
}

class Clock {
  constructor({template}) {
    this._template = template;
  }

  _render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) min = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = this._template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }

  stop() {
    clearInterval(this._timer);
  }

  start() {
    this._render();
    this._timer = setInterval(() => this._render(), 1000);
  }
}

let clock = new Clock({template: 'h:m:s'});
    clock.start();





class Animal {

  constructor(name) {
    this.name = name;
  }

}

class Rabbit extends Animal {
  constructor(name) {
    super(name);
    this.created = Date.now();
  }
}

let rabbit = new Rabbit("White Rabbit"); // ok now
alert(rabbit.name); // White Rabbit




class MyClass {
  constructor(...) {
    // ...
  }
  method1(...) {}
  method2(...) {}
  get something(...) {}
  set something(...) {}
  static staticMethod(...) {}
  // ...
}


/// swift practice

class NamedShape{
  constructor(name){
    this.name = name
    this.numberOfShape = 0
  }
  simpleDesc() {
    return `A shape with ${this.numberOfShape} sides.`
  }
  sayName() {
    console.log(this.name);
  }
}

class Square extends NamedShape{
  constructor(sideLength, name) {
    super(name);
    this.sideLength = sideLength
    this.numberOfShape = 4
  }
  area(){
    return this.sideLength * this.sideLength
  }
  simpleDesc(){
    super.simpleDesc()
    return `A Square with side of length ${this.numberOfShape}.`
    
  }
  sayName() {
        super.sayName();
        console.log('Name:' + this.name);
    }
}

let test = new Square(5.2,"my test square")
test.simpleDesc()
test.area()


class EquilaterialTriangle extends NamedShape{
  constructor(sideLength, name) {
    super(name)
    this.sideLength = sideLength
    this.numberOfShape = 3
  }
  get permiter() {
    return 3.0 * this.sideLength
  }

  set permiter(newValue) {
    this.sideLength = newValue / 3.0   // validation could be checked here such as only allowing non numerical values
  }

  simpleDesc(){
    super.simpleDesc();
    return `An equilateal triangle with side of length ${sideLength}`
  }

}
var tri = new EquilaterialTriangle(3.1,"a triangle")
console.log(tri.permiter)
tri.permiter = 9.9
console.log(tri.sideLength)

  



























class someClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayName() {
        alert(this.name);
    }
}
class Child extends someClass {
    constructor(name, age) {
        super(name, age);
    }
    sayName() {
        super.sayName();
        alert('Name:' + this.name + ' Age:' + this.age);
    }
}

var myChild = new Child('dwayne', 27);
myChild.sayName();








