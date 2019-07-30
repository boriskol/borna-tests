///


var pokemon = {
  firstname: 'Pika',
  lastname: 'Chu ',
  getPokeName: function() {
    var fullname = this.firstname + ' ' + this.lastname;
    return fullname;
  }
};

var pokemonName = function(snack, hobby) {
  console.log(this.getPokeName() + 'I choose you!');
  console.log(this.getPokeName() + ' loves ' + snack + ' and ' + hobby);
};
// creates new object and binds pokemon. 'this' of pokemon === pokemon now
var logPokemon = pokemonName.bind(pokemon);
// 'Pika Chu I choose you!'
logPokemon('sushi', 'algorithms');

///
/*
The main differences between bind() and call() is that the call() method:

    Accepts additional parameters as well
    Executes the function it was called upon right away.
    The call() method does not make a copy of the function it is being called on.

call() and apply() serve the exact same purpose.
The only difference between how they work is that call() expects all parameters to be passed in individually,
 whereas apply() expects an array of all of our parameters.
*/
var pokemon2 = {
  firstname: 'Pika',
  lastname: 'Chu ',
  getPokeName: function() {
    var fullname = this.firstname + ' ' + this.lastname;
    return fullname;
  }
};

var pokemonName2 = function(snack, hobby) {
  console.log(this.getPokeName() + ' loves ' + snack + ' and ' + hobby);
};

pokemonName2.call(pokemon2, 'sushi', 'algorithms'); // Pika Chu  loves sushi and algorithms
pokemonName2.apply(pokemon2, ['sushi', 'algorithms']); // Pika Chu  loves sushi and algorithms


//car
var car = {
  registrationNumber: "GA12345",
  brand: "Toyota",

  displayDetails: function(ownerName) {
    console.log(ownerName + ", this is your car: " + this.registrationNumber + " " + this.brand);
  },

  displayDetail: function() {
    console.log(this.registrationNumber + " " + this.brand);
  }
}
var myCarDetail = car.displayDetail.bind(car);
myCarDetail(); // GA12345 Toyota
var myCarDetails = car.displayDetails.bind(car, "Vivian"); // Vivian, this is your car: GA12345 Toyota
myCarDetails();



function sumOfNumbers() {
  console.log(this)
  var total = 0;
  for (var i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}
console.log('call');
var sum = sumOfNumbers.call(this, 1, 2, 3);
console.log(sum);
console.log('call end');

console.log('apply');
var sum1 = sumOfNumbers.apply(this, [1, 2, 3, 4]);
console.log(sum1);
console.log('apply end');

console.log('bind');
var sum1 = sumOfNumbers.bind(this, 1, 2, 3, 4);
let sumBack = sum1();
console.log(sumBack);
console.log('bind end');


//Demo with javascript .apply()

var obj = {
  name: "Niladri"
};
var greeting = function(a, b, c) {
  return "welcome " + this.name + " to " + a + " " + b + " in " + c;
};
// array of arguments to the actual function
var args = ["Newtown", "KOLKATA", "WB"];
console.log("Output using .apply() below ")
console.log(greeting.apply(obj, args));

/* The output will be
  Output using .apply() below
 welcome Niladri to Newtown KOLKATA in WB */



let john = {
  name: 'John',
  age: 24,
};
let jane = {
  name: 'Jane',
  age: 22,
};

function greeting1() {
  console.log(this)
  console.log(`Hi, I am ${this.name} and I am ${this.age} years old`);
}

function greeting2(lang) {
  this.lang = lang
  console.log(this)
  console.log(`${lang}: I am ${this.name}`);
  return `${lang}: I am ${this.name}`
}

function greet(greeting, lang) {
  console.log(this);
  console.log(`${greeting}, I am ${this.name} and I am ${this.age} years old`);
  return `${greeting}, I am ${this.name} and I am ${this.age} years old return`
}

//The bind method creates a copy of the function and sets the this keyword
let greetingJohnBind = greeting1.bind(john); // Hi, I am John and I am 24 years old
greetingJohnBind();
let greetingJaneBind = greeting1.bind(jane); // Hi, I am Jane and I am 22 years old
greetingJaneBind();

const greetingJohn2 = greeting2.bind(john, 'en');
greetingJohn2();
const greetingJane2 = greeting2.bind(jane, 'es');
greetingJane2();


//this through error
//var greetingJohnCall = greeting1.call(john);// Hi, I am John and I am 24 years old
//greetingJohnCall();
console.log("greeting2 call")
//call and apply methods sets the this keyword and calls the function immediately
greeting1.call(john, 'us');

//var greetingJaneCall = greeting2.call(jane, 'hr');// Hi, I am Jane and I am 22 years old
//greetingJaneCall();
greeting2.call(jane, 'hr');

greeting2.apply(john, ['vz']);
greeting2.apply(jane, ['vz']);
console.log("greeting2 end");

var gr = greet.apply(john, ['Hi', 'en']); // Hi, I am Jane and I am 22 years old
console.log(gr)
greet.apply(jane, ['Hola', 'es']);

/*
We have learned that how this keyword behaves differently in JavaScript than in other object-oriented languages.
The call, bind and apply methods can be used to set the this keyword independent of how a function is called.

The bind method creates a copy of the function and sets the this keyword,
while the call and apply methods sets the this keyword and calls the function immediately.
*/

const counter = {
  count: 0,
  incrementCounter: function() {
    console.log(this);
    this.count++;
    console.log(this);
    let bt = document.querySelector('.btn');
    bt.value = this.count;
    bt.innerHTML = this.count;
  }
}
document.querySelector('.btn').addEventListener('click', counter.incrementCounter.bind(counter));


const user = {
  name: 'Tyler',
  age: 27,
  languages: ['JavaScript', 'Ruby', 'Python'],
  greet() {
    const hello = `Hello, my name is ${this.name} and I know`

    const langs = this.languages.reduce(function(str, lang, i) {
      if (i === this.languages.length - 1) {
        return `${str} and ${lang}.`
      }
      return `${str} ${lang},`
    }.bind(this), "")

    console.log(hello + langs)
  }
}

user.greet()

const user1 = {
  name: 'Tyler',
  age: 27,
  languages: ['JavaScript', 'Ruby', 'Python', 'Swift'],
  greet() {
    const hello = `Hello, my name is ${this.name} and I know`

    const langs = this.languages.reduce((str, lang, i) => {
      if (i === this.languages.length - 1) {
        return `${str} and ${lang}.`
      }

      return `${str} ${lang},`
    }, "")

    console.log(hello + langs)
    //return hello + langs
  }
}

user1.greet()


var students = ["Peter Alexander", "Michael Woodruff", "Judy Archer", "Malcolm Khan"];
var helo = {
  greating: "Welcome"
}
// No specific parameters defined, because ANY number of parameters are accepted
function welcomeStudents() {
  console.log(this)
  console.log(arguments)
  var args = Array.prototype.slice.call(arguments);
  console.log(args)
  var lastItem = args.pop();
  console.log(`${this.greating} ${args.join(", ")} and  ${lastItem}.`);
}
//console.log(students)
welcomeStudents.bind(helo).apply(null, students);
// Welcome Peter Alexander, Michael Woodruff, Judy Archer, and Malcolm Khan.

var allNumbers = [23, 11, 34, 56];
// Using the apply () method, we can pass the array of numbers:
console.log(Math.max.apply(null, allNumbers)); // 56
console.log(Math.min.apply(null, allNumbers)); // 11



var gameController = {
  scores: [20, 34, 55, 46, 77],
  avgScore: null,
  players: [{
      name: "Tommy",
      playerID: 987,
      age: 23
    },
    {
      name: "Pau",
      playerID: 87,
      age: 33
    }
  ]
}

var appController = {
  scores: [900, 845, 809, 950],
  avgScore: null,
  avg: function() {
    var sumOfScores = this.scores.reduce(function(prev, cur, index, array) {
      return prev + cur;
    });
    console.log(sumOfScores)
    console.log(this.scores.length)
    this.avgScore = sumOfScores / this.scores.length;
  }
}

// Note that we are using the apply () method, so the 2nd argument has to be an array
appController.avg.apply(gameController);
console.log(gameController.avgScore); // 46.4
// appController.avgScore is still null;
//it was not updated, only gameController.avgScore was updated
console.log(appController.avgScore); // null

appController.maxNum = function() {
  this.avgScore = Math.max.apply(null, this.scores);
}

appController.maxNum.apply(gameController, gameController.scores);
console.log(gameController.avgScore); // 77


function transitionTo(name) {
  // Because the arguments object is an array-like object
  // We can use the slice () Array method on it
  // The number "1" parameter means: return a copy of the array
  // from index 1 to the end. Or simply: skip the first item

  var args = Array.prototype.slice.call(arguments, 1);

  // I added this bit so we can see the args value
  console.log(args);

  // I commented out this last line because it is beyond this example
  //doTransition(this, name, this.updateURL, args);
}

// Because the slice method copied from index 1 to the end, the first item "contact"
// was not returned
transitionTo("contact", "Today", "20"); // ["Today", "20"]

// An array-like object: note the non-negative integers used as keys
var anArrayLikeObj = {
  0: "Martin",
  1: 78,
  2: 67,
  3: ["Letta", "Marieta", "Pauline"],
  length: 4
};
// Make a quick copy and save the results in a real array:
// First parameter sets the "this" value
var newArray = Array.prototype.slice.call(anArrayLikeObj, 0);

console.log(newArray); // ["Martin", 78, 67, Array[3]]

// Search for "Martin" in the array-like object
console.log(Array.prototype.indexOf.call(anArrayLikeObj, "Martin") === -1 ? false : true); // true

// Try using an Array method without the call () or apply ()
// Error: Object has no method 'indexOf'
//console.log(anArrayLikeObj.indexOf("Martin") === -1 ? false : true); // Error: Object has no method 'indexOf'

// Reverse the object:
console.log(Array.prototype.reverse.call(anArrayLikeObj));
// {0: Array[3], 1: 67, 2: 78, 3: "Martin", length: 4}

// Sweet. We can pop too:
console.log(Array.prototype.pop.call(anArrayLikeObj));
console.log(anArrayLikeObj); // {0: Array[3], 1: 67, 2: 78, length: 3}

// What about push?
console.log(Array.prototype.push.call(anArrayLikeObj, "Jackie"));
console.log(anArrayLikeObj); // {0: Array[3], 1: 67, 2: 78, 3: "Jackie", length: 4}





// Define an object with some properties and a method
// We will later pass the method as a callback function to another function
var clientData = {
  id: 094545,
  fullName: "Not Set",
  // setUserName is a method on the clientData object
  setUserName: function(firstName, lastName) {
    // this refers to the fullName property in this object
    this.fullName = firstName + " " + lastName;
  }
}

function getUserInput(firstName, lastName, callback, callbackObj) {
  // The use of the Apply method below will set the "this" value to callbackObj
  callback.apply(callbackObj, [firstName, lastName]);
}
// The clientData object will be used by the Apply method to set the "this" value
getUserInput("Barack", "Obama", clientData.setUserName, clientData);
// the fullName property on the clientData was correctly set
console.log(clientData.fullName); // Barack Obama



// global variable for demonstration
var avgScore = "global avgScore";

//global function
function avg(arrayOfScores) {
  // Add all the scores and return the total
  var sumOfScores = arrayOfScores.reduce(function(prev, cur, index, array) {
    return prev + cur;
  });

  // The "this" keyword here will be bound to the global object, unless we set the "this" with Call or Apply
  this.avgScore = sumOfScores / arrayOfScores.length;
}

var gameController = {
  scores: [20, 34, 55, 46, 77],
  avgScore: null
}

// If we execute the avg function thus, "this" inside the function is bound to the global window object:
avg(gameController.scores);
// Proof that the avgScore was set on the global window object
console.log(window.avgScore); // 46.4
console.log(gameController.avgScore); // null

// reset the global avgScore
avgScore = "global avgScore";

// To set the "this" value explicitly, so that "this" is bound to the gameController,
// We use the call () method:
avg.call(gameController, gameController.scores);

console.log(window.avgScore); //global avgScore
console.log(gameController.avgScore); // 46.4


var person = {
  firstName: "Penelope",
  lastName: "Barrymore",
  showFullName: function() {
    // The "context"
    console.log(this.firstName + " " + this.lastName);
  }
}

// The "context", when invoking showFullName, is the person object, when we invoke the showFullName () method on the person object.
// And the use of "this" inside the showFullName() method has the value of the person object,
person.showFullName(); // Penelope Barrymore

// If we invoke showFullName with a different object:
var anotherPerson = {
  firstName: "Rohit",
  lastName: "Khan"
};

// We can use the apply method to set the "this" value explicitly—more on the apply () method later.
// "this" gets the value of whichever object invokes the "this" Function, hence:
person.showFullName.apply(anotherPerson); // Rohit Khan

// So the context is now anotherPerson because anotherPerson invoked the person.showFullName ()  method by virtue of using the apply () method



///
