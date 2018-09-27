

function mixin(sourceObj, targetObj){
	for (var key in sourceObj){
		if(!(key in targetObj)){
			targetObj[key] = sourceObj[key]
		}
	}
	return targetObj
}


var Vehicle = {
	engines: 1,
	ignition: function(){
		console.log("turning engine")
	},
	drive: function(){
		this.ignition();
		console.log("Starting and moving farword");
	}
}
/*
var Car = mixin(Vehicle, { });

mixin({
	wheels: 4,

	drive: function(){
		Vehicle.drive.call( this )
		console.log("Ralling on on all" + this.wheels)
	}
}, Car)*/



var Car = mixin(Vehicle, {
	wheels: 4,
	drive: function(){
		Vehicle.drive.call( this )
		console.log("Ralling on on all" + this.wheels)
	}
})

console.log(Car.drive())

function Foo(name){
	this.name = name;
}
Foo.prototype.myName = function(){
	return this.name;
}
function Bar(name, lable){
	Foo.call(this, name)
	this.lable = lable
}

Bar.prototype = Object.create(Foo.prototype)
//es6+
//Object.setPrototypeOf(Foo.prototype, Bar.prototype)

Bar.prototype.myLabel = function(){
	return this.lable
}

var a = new Bar("a", "object a")

a.myName //a
a.myLabel //object a


function Mammal() {
  this.isMammal = 'yes';
}

function MammalSpecies(sMammalSpecies) {
  this.species = sMammalSpecies;
}

MammalSpecies.prototype = new Mammal();
MammalSpecies.prototype.constructor = MammalSpecies;

var oCat = new MammalSpecies('Felis');

console.log(oCat.isMammal); // 'yes'

function Animal() {
  this.breathing = 'yes';
}

Object.appendChain(oCat, new Animal());

console.log(oCat.breathing); // 'yes'









function VehicleA(){
	this.engines = 1;
}
VehicleA.prototype.ignition = function() {
	console.log("turning engine")
};
VehicleA.prototype.drive = function(){
	this.ignition();
	console.log("Starting and moving farword");
}
function CarA(){
	var car = new VehicleA();
	car.wheels = 4;

	var vehDrive = car.drive;
	car.drive = function(){
		vehDrive.call( this )
		console.log("Ralling on on all" + this.wheels)
	}
}

var myCar = new CarA();
myCar.drive()






var Somthing = {
	cool: function(){
		this.greeting = "Hello World";
		this.count = this.count ? this.count + 1 : 1;
	}
}

Somthing.cool()
Somthing.greeting;
Somthing.count;

var Another = {
	cool: function(){
		Somthing.cool.call(this)
	}
}

Another.cool()
Another.greeting;
Another.count;













