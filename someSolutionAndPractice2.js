function Game(name, score, timer) {
  console.log(`in Game`)
  this.name = name;
  this.score = score;
  this.timerT = timer;
}

Game.prototype.clearLocalStorage = function() {
  console.log('clearLocalStorage')
};
Game.prototype.clearBoard = function() {
  console.log('clearBoard')
  console.log(this.timer)
  console.log(this.timerT)
  console.log(this)
  console.log(this.timer = null)
  console.log(this)
};

Game.prototype.restart = function() {
  this.clearLocalStorage();
  this.timer = setTimeout(this.reset.bind(this), this.timerT); // bind to 'this'
};
Game.prototype.reset = function() {
  this.clearBoard(); // ahhh, back in the context of the right 'this'!
};

var game = new Game('Borna', 10, 0)
console.log(game)
game.restart();



//let solved global
//for (var i = 0; i < 10; i++) {
for (let i = 0; i < 10; i++) {
  console.log("in loop" + i);
}
//console.log("out of loop" + i);





function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}
var p1 = new Person('John', 'Doe');
var p2 = new Person('Robert', 'Doe');
console.log(p1 instanceof Person); // prints 'true'
console.log(p2 instanceof Person); // prints 'true'
console.log(p1 === p2); // prints 'false'

Person.prototype.getFullName = function() {
  return this.firstName + ' ' + this.lastName;
}
console.log(p1.getFullName()); // prints 'John Doe'
console.log(p2.getFullName());
// but p1 can’t directly access the 'prototype' object...
//console.log(p1.prototype);                // prints 'undefined'
//console.log(p1.prototype.getFullName());  // generates an error

p1.getFullName = function() {
  return 'I am anonymous';
}
console.log(p1.getFullName()); // prints 'I am anonymous'
console.log(p2.getFullName()); // prints 'Robert Doe'



var start = new Date().getTime();

function Parent() {
  this.delta = 10;
};

function ChildA() {};
ChildA.prototype = new Parent();

function ChildB() {}
ChildB.prototype = new ChildA();

function ChildC() {}
ChildC.prototype = new ChildB();

function ChildD() {};
ChildD.prototype = new ChildC();

function ChildE() {};
ChildE.prototype = new ChildD();

function nestedFn() {
  var child = new ChildE();
  var counter = 0;
  for (var i = 0; i < 1000; i++) {
    for (var j = 0; j < 1000; j++) {
      for (var k = 0; k < 1000; k++) {
        counter += child.delta;
      }
    }
  }
  console.log('Final result: ' + counter);
}

nestedFn();
var end = new Date().getTime();
var diff = end - start;
console.log('Total time: ' + diff + ' milliseconds');



console.log(NaN == NaN); // false
console.log(NaN === NaN); // false
console.log(isNaN(NaN)); // true

//var elems = document.getElementsByTagName("p");
var div = document.getElementById("ul");
var fragment = document.createDocumentFragment();
for (var e = 0; e < 10; e++) { // elems previously set to list of elements

  var li = document.createElement('li');
  li.textContent = e;
  fragment.appendChild(li);
  //fragment.appendChild(elems[e]);
}
div.appendChild(fragment.cloneNode(true));
//div.appendChild(fragment);



var elements = document.getElementsByTagName('li');
var n = elements.length; // assume we have 10 elements for this example
var makeHandler = function(num) { // outer function
  return function() { // inner function
    console.log("This is element #" + num);
  };
};
for (var i = 0; i < n; i++) {
  elements[i].onclick = makeHandler(i + 1);
}





BaseObject = function(name) {
  if (typeof name !== "undefined") {
    this.name = name;
  }
};
BaseObject.prototype.name = 'default';

var thirdObj = new BaseObject('unique');
console.log(thirdObj.name); // -> Results in 'unique'

delete thirdObj.name;
console.log(thirdObj.name); // -> Results in 'default'




var MyObject = function() {}
MyObject.prototype.whoAmI = function() {
  console.log(this === window ? "window" : "MyObj");
};

var obj = new MyObject();
obj.w = obj.whoAmI; // still in the obj namespace

obj.whoAmI(); // outputs "MyObj" (as expected)
obj.w(); // outputs "MyObj" (as expected)



var bar = null;
console.log(typeof bar === "object"); // logs true!

console.log((bar !== null) && (typeof bar === "object")); // logs false
console.log((bar !== null) && ((typeof bar === "object") || (typeof bar === "function")));
console.log((bar !== null) && (bar.constructor === Object));


/*
In the outer function, both this and self refer to myObject
and therefore both can properly reference and access foo.
In the inner function, though, this no longer refers to myObject.
As a result, this.foo is undefined in the inner function,
whereas the reference to the local variable
self remains in scope and is accessible there.
*/
var myObject = {
  foo: "bar",
  func: function() {
    var self = this;
    console.log("outer func:  this.foo = " + this.foo);
    console.log("outer func:  self.foo = " + self.foo);
    (function() {
      console.log("inner func:  this.foo = " + this.foo);
      console.log("inner func:  self.foo = " + self.foo);
    }());
  }
};
myObject.func();



//The HTMLCollection by default does not have forEach,
//it needs to be converted into an array
//(eleName = Array.from(eleName))
//and then the traversal is possible using forEach.



// ES5 Function Constructor
function Person(name) {
  this.name = name;
}
/*
// ES6 Class
class Person {
  constructor(name) {
    this.name = name;
  }
}
// ES5 Function Constructor
function Student(name, studentId) {
  // Call constructor of superclass to initialize superclass-derived members.
  Person.call(this, name);
  // Initialize subclass's own members.
  this.studentId = studentId;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

// ES6 Class
class Student extends Person {
  constructor(name, studentId) {
    super(name);
    this.studentId = studentId;
  }
}
*/

var output = (function(x) {
  //this actualy error
  delete x;
  return x;
})(10);

console.log(output);

var Employee = {
  company: 'xyz'
}
var emp1 = Object.create(Employee);
delete emp1.company
console.log(emp1.company);
console.log(emp1.hasOwnProperty('company'));



const a = [1, 2, 3];
const doubled = a.forEach((num, index) => {
  // Do something with num and/or index.
  console.log(num, index)
});
console.log(doubled)
const b = [1, 2, 3];
const doubledB = b.map(num => {
  return num * 2;
});
console.log(doubledB)


var Exposer = (function() {
  var privateVariable = 10;

  var privateMethod = function() {
    console.log('Inside a private method!');
    privateVariable++;
  }

  var methodToExpose = function() {
    console.log('This is a method I want to expose!');
  }

  var otherMethodIWantToExpose = function() {
    privateMethod();
  }

  return {
    first: methodToExpose,
    second: otherMethodIWantToExpose
  };
})();

Exposer.first(); // Output: This is a method I want to expose!
Exposer.second(); // Output: Inside a private method!
Exposer.methodToExpose; // undefined




/*
The above IIFE is executed there is no way we can reference {x: 12} and {y: 12} anymore.
Garbage collector goes ahead and deletes the key b pointer from “WeakMap” and also removes {y: 12} from memory.
But in case of “Map”, the garbage collector doesn’t remove a pointer from “Map”
and also doesn’t remove {x: 12} from memory.
WeakMap allows garbage collector to do its task but not Map.
With manually written maps, the array of keys would keep references to key objects,
preventing them from being garbage collected. In native WeakMaps,
references to key objects are held "weakly",
which means that they do not prevent garbage collection in case there would be no other reference to the object.
*/
var map = new Map();
var weakmap = new WeakMap();

(function() {
  var a = {
    x: 12
  };
  var b = {
    y: 12
  };

  map.set(a, 1);
  weakmap.set(b, 2);
})()




function changeStuff(a, b, c) {
  a = a * 10;
  b.item = "changed";
  c = {
    item: "changed"
  };
}

var num = 10;
var obj1 = {
  item: "unchanged"
};
var obj2 = {
  item: "unchanged"
};

changeStuff(num, obj1, obj2);

console.log(num);
console.log(obj1.item);
console.log(obj2.item);




let person = {
  name: "Leonardo",
  profession: {
    name: "developer"
  }
};
Object.freeze(person); // make object immutable
person.profession.name = "doctor";
console.log(person); //output { name: 'Leonardo', profession: { name: 'doctor' } }

function deepFreeze(object) {
  let propNames = Object.getOwnPropertyNames(object);
  for (let name of propNames) {
    let value = object[name];
    object[name] = value && typeof value === "object" ?
      deepFreeze(value) : value;
  }
  return Object.freeze(object);
}
let person1 = {
  name: "Leonardo",
  profession: {
    name: "developer"
  },
  prof: {
    onj: "mail"
  }
};
deepFreeze(person1);
person1.profession.name = "doctor"; // TypeError: Cannot assign to read only property 'name' of object
console.log(person1);


var steveJobs = {
    mission: "Change the world",
    describe: function() {
        console.log(this.mission);
    }
};
steveJobs.describe(); // Outputs: "Change the world",
// Now borrow the describe function with call() method
var steveWoz = {
    mission: "Do great engineering"
};
steveJobs.describe.call(steveWoz); // Outputs: "Do great engineering"


var Website = {
  updatePageView: function() {
    for(var i = 0; i < arguments.length; i++) {
      this.pageViewNumber += arguments[i];
    }
    return this.pageViewNumber;
  }
}
var profilePage = {
  name: 'My Web page',
  pageViewNumber: 0
};
Website.updatePageView.call(profilePage, 5, 6, 7, 8);
console.log(Website.updatePageView.call(profilePage));
// Output => 26

function myFunction(param) {
  console.log(this + " says hello " + param);
}
myFunction.call("Paul", "world")
// Output => Paul says hello world

///nice
function myFunc() {
    return Array.prototype.slice.call(arguments);
    // args is now a real Array, so can use the sort() method from Array
}
console.log(myFunc('USA', 'UK', 'India'));
console.log(myFunc('USA', 'UK', 'India').sort());

// Will output =>
// [ 'USA', 'UK', 'India' ]
// [ 'India', 'UK', 'USA' ]

var arrayLikeObj = {0:"Apple", 1:"Uber", 2:"50", length:3};
var convertedRealArray = Array.prototype.slice.call(arrayLikeObj, 0);
console.log(convertedRealArray);




var value = 2568,sum = 0;
while (value) {
    sum += value % 10;
    console.log(sum)
    value = Math.floor(value / 10);
    console.log(value)
}
console.log(sum);

var value1 = 2568,
    sum1 = value1
        .toString()
        .split('')
        .map(Number)
        .reduce(function (a, b) {
            return a + b;
        }, 0);

console.log(sum1);


function count(a,name){
 var result = 0;
 for(var o in a){
   if(a[o] == name){
     result++;
   }
 }
 return `${name} repare ${result}`;
}
const deepFlatten = function(arr){
  return [].concat(...arr.map(function(v){
    let newArr = (Array.isArray(v) ? deepFlatten(v) : v)
    return newArr;
  }))
}
let deepF = deepFlatten(["apple", ["banana"], [["apple"], "jabuka"], "kruska"]); // [1,2,3,4,5]
console.log(deepF)
let dfr = deepF.reduce((map, value) => {
  map[value] = (map[value] || 0) + 1;
  return map
},{})
console.log(dfr)
let numOF = count(deepF, "apple")
console.log(numOF);






////fuck
