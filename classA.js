

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
