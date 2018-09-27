

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






function VehicleA(){
	this.engines: 1
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


var anotherObject = {
	a:2;
}
var myObject = Object.create(anotherObject)
anotherObject.a //2
myObject.a //2

anotherObject.hasOwnProperty("a")
myObject.hasOwnProperty("a")

myObject.a++
anotherObject.a //2
myObject.a //3




var obj = {key1: "value1", key2: "value2"};
var pair = {key3: "value3"};
obj = {...obj, ...pair};

document.body.innerHTML = JSON.stringify(obj);








