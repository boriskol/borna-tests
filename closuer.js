//treeHouse Ex:
function makeCounter(noun){
  var counter = 0;
  function innerCount(){
    counter++
    console.log(counter + " " + noun);
    return counter;
  }
  return innerCount;
}
var countLikes = makeCounter('Likes');
countLikes();
var qq = countLikes();
if (qq == 2){
  console.log(qq)
};

function intructionGenerator(){
  function multiplyBy2(num){
    return num * 2;
  }
  return multiplyBy2;
}
var generatedFunc = intructionGenerator();
var result = generatedFunc(8);
console.log(result)
//var counter = 0; //If we define globally, incrementCounter will count up every time

//Score A 
function outer(){
  //Score B 
  var counter = 0; //Define din Scope B to set the Closure, the Lexical Scope, the "Closed over variable environment"
  function incrementCounter(){
    //Scope C --> counter is accessible here
   // var counter = 0; //if we define here will always be 1 because we are defining it in this execution context
    counter++;
    console.log(counter);
    return counter;
  }
  return incrementCounter;
}
var myNewFunc = outer();
myNewFunc();
myNewFunc();

var anotherFunc = outer();
anotherFunc();
anotherFunc();

var staythree = myNewFunc();
myNewFunc();
console.log(staythree);
myNewFunc();
myNewFunc();
console.log(staythree);

//HW---------
console.log('---------------HomeWork----------------');

function addByX(x) {
	function innerFunc(input){
    return ( input + x );
  }
  return innerFunc;
}

var addByTwo = addByX(3); // innerFunc(input){return input +2}
//addByTwo(1); //should return 3
//addByTwo(2); //should return 4
//addByTwo(3); //should return 5

//--------------------------------------------------
// Extension
//--------------------------------------------------

function once(func) {
  var firstCall;
  function inner(input){
    if(!firstCall){
      firstCall = func(input);
      console.log(firstCall + "firstCall")
      return firstCall;
    }else{
      return firstCall;
    }
  }
  return inner;
}

var onceFunc = once(addByTwo);

// UNCOMMENT THESE TO TEST YOUR WORK!
console.log(onceFunc(10));  //should log 6
//console.log(onceFunc(4));  //should log 6
//console.log(onceFunc(10));  //should log 6



function after(count, func) {
  counter = 0;
  function inner(){
    counter++;
    if(counter < count){
      //Do Nothing 
    }else{
      return func();
    }
  }
  return inner;
}

var called = function() { console.log('hello') };
var afterCalled = after(3, called);

afterCalled(); // nothing is printed
afterCalled(); // nothing is printed
afterCalled(); // 'hello' is printed


function delay(func, wait) {
  return setTimeout(func, wait);
}

delay(onceFunc(10), 5000);

/*
Extension: Challenge 5
Write a function once that accepts a callback as input and returns a function. 
When the returned function is called the first time, it should call the callback and return that output. 
If it is called any additional times, instead of calling the callback again it will simply return the output 
value from the first time it was called.

Extension: Challenge 6
Write a function after that takes the number of times the callback needs to be called before being executed 
as the first parameter and the callback as the second parameter.
Extension: Challenge 7
Write a function delay that accepts a callback as the first parameter and the wait in milliseconds 
before allowing the callback to be invoked as the second parameter. 
Any additional arguments after wait are provided to func when it is invoked. HINT: research setTimeout();
*/

///////Challeng 6 - what will the result be?

function mystery ( input ){
  var secret = 4;
  input += 2;
  function mystery2 ( multiplier ) { 
    multiplier *= input;
    return secret * multiplier;
  }
  return mystery2;
}

function mystery3 ( param ){
  function mystery4 ( bonus ){
    return param(6) + bonus;
  }
  return mystery4;
}

var hidden = mystery(3);
var jumble = mystery3(hidden);
var result = jumble(2);
result;



function timesBy(n) {
  var numbers = [];
  function multiplyByN(array) {
    array.map(function(ele) {
      numbers.push(ele * n);
    });
    return numbers;
  }
  return multiplyByN;
}

var timesBy2 = timesBy(2); 
var timesBy3 = timesBy(3); 
console.log(timesBy2([1, 3, 5, 7, 9])); //-> [2, 6, 10, 14, 18]
console.log(timesBy3([1, 3, 5, 7, 9])); //-> [3, 9, 15, 21, 27]



var makeCounter = function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  }  
};

var counter1 = makeCounter();
var counter2 = makeCounter();
console.log(counter1.value()); /* Alerts 0 */
counter1.increment();
counter1.increment();
console.log(counter1.value()); /* Alerts 2 */
counter1.decrement();
console.log(counter1.value()); /* Alerts 1 */
console.log(counter2.value());


// Create a function.
function f(x){
  return x * x;
}
// Use the function.
f(5); // 25

// Create an anonymous function and assign 
// it to a variable.
var g = function(x){
  return x * x;
}
// Now you can pass the function around.
var h = g;
// And use it
h(5); // 25



function  outher(){
  let count = 0;
  function increment(){
    count++;
    return count;
  }
  return increment;
}
let myf = outher()
myf()
myf()





