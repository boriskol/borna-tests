
var IceCream = {
  flavors:     [ 'vanilla', 'chocolate', 'bubblegum' ],
  newFlavor:   'banana',
  addNewFlavor: function(  ){
	  var safeToAdd = true
	  //  check if we've added it already
	  this.flavors.forEach(function(flavor){
	    if(flavor === this.newFlavor)
	      safeToAdd = false;
	  }.bind(this));
	  if(safeToAdd)
	    this.flavors.push(this.newFlavor);
	}
}

IceCream.addNewFlavor();




