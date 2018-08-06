console.log("------- class ---------");

class Animal { 
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    console.log(this.name + ' makes a noise.');
  }
}

class Dog extends Animal {
  speak() {
    console.log(this.name + ' barks.');
  }
}

var d = new Dog('Mitzie');
d.speak(); // Mitzie barks.






class Cars {
    constractor(options){
        //super(optiopns)
        this.title = optopns.title;
    }

    drive(){
        return 'vroom';
    }
}

class Toyota extends Cars{
    constractor(options){
        //super(options);
        this.color = options.color;
    }
    honk(){
        return 'beep';
    }
    color(){
        var l = this.color + " color"
        return l;
    }
}

const toyota = new Toyota({color:'red', title:'daily drive'});
var ttt = toyota.honk();
var tttD= toyota.drive();
var tttDD= toyota.color();
console.log(ttt);
console.log(tttD);
console.log(tttDD);


class Polygon {
  constructor(height, width) {
    this.name = 'Polygon';
    this.height = height;
    this.width = width;
  }
}

class Square extends Polygon {
  constructor(length) {
    super(length, length);
    this.name = 'Square';
  }
}

class Developer {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  getName() {
    return this.firstname + ' ' + this.lastname;
  }
}

var me = new Developer('Robin', 'Wieruch');

console.log(me.getName());


//**
class Borna{
  constructor(a,b){
    this.x = a;
    this.y = b;
  }
  multiplyXY(){
    return this.x * this.y;
  }
}

var bor = new Borna(2,2)
console.log(bor.multiplyXY())

class Lib extends Borna {
  constructor(a,b,c){
    super(a,b);
    this.z = c;
  }
  multiplyXYZ(){
    return super.multiplyXY() * this.z
  }
}
var b = new Lib(5, 15, 25);
console.log(b.multiplyXYZ())


function Borna(a,b){
  this.x = a;
  this.y = b;
}
Borna.prototype.multiplyXY = function() {
  return this.x * this.y;
};

//**

//
class ParentA{
  constructor(){
    this.id = "a";
  }
  foo(){
    console.log("ParentA:", this.id);
  }
}
class ParentB{
  constructor(){
    this.id = "b";
  }
  foo(){
    console.log("ParentB:", this.id);
  }
}
class ChiledA extends ParentA{
  foo(){
    super.foo()
    console.log("ChiledA:", this.id);
  }
}
class ChiledB extends ParentB{
  foo(){
    super.foo()
    console.log("ChiledB:", this.id);
  }
}

var a = new ChiledA();
a.foo()
var b = new ChiledB();
b.foo();
//
//
function Foo(){
  this.a = 1;
}
function Bar(){
  this.b = 2;
  Foo.call( this )
}

Bar.prototype.sume = function(b) {
  return this.a += b;
};
Bar.prototype.mult = function(b) {
  return this.b *= b;
};
// Bar extends Foo
Bar.prototype = Object.create(Foo.prototype);
//Bar.prototype.constructor = Bar;
var c = new Bar();
//console.log(c.a)
c.sume(2)
c.mult(5)
// ES6 eqvivalent
class Foo {
  constructor(){
    this.a = 1;
  }
  sume(b){
    return this.a += b;
  }
}
class Bar extends Foo {
  constructor(){
    super();
    this.b = 2;
  }
  mult(c){
    return this.b *= c;
  }
}
var f = new Bar();
console.log(f.a)
f.sume(6)
f.mult(6)
///

// Extending Native
class MyCoolArray extends Array{
  first(){
    return this[0];
  }
  last(){
    return this[this.length - 1];
  }
}

var arr =  new MyCoolArray(1,2,3,4,5);
arr.lenght;
arr;
arr.first();
arr.last();

////
// Shape - superclass
function Shape() {
  this.x = 0;
  this.y = 0;
}
// superclass method
Shape.prototype.move = function(x, y) {
  this.x += x;
  this.y += y;
  console.info('Shape moved.');
};
// Rectangle - subclass
function Rectangle() {
  Shape.call(this); // call super constructor.
}

// subclass extends superclass
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

var rect = new Rectangle();

console.log('Is rect an instance of Rectangle?',
  rect instanceof Rectangle); // true
console.log('Is rect an instance of Shape?',
  rect instanceof Shape); // true
rect.move(1, 1); // Outputs, 'Shape moved.'


















