
var IceCream = {
  flavors:     [ 'vanilla', 'chocolate', 'bubblegum' ],
  newFlavor:   'banana',
  addNewFlavor: function(){
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



function CNContactStore ( ) {
    this.reply = function ( contacts ) {
          function resolveAfter() {
              return new Promise(resolve => {
          var pcontacts = contacts.reduce(function(list, person) {
          var pl = person.phoneLabel.isEmpty() ? "Number " : person.phoneLabel
          var givenName = person.first
          , familyName = person.last
          , fullName = givenName + " " + familyName
          , id = person.id
          , email = email
          , phone = person.phone
          , type = pl;
          if(name && phone.length) list.push({
             id: id,
             name: givenName,
             fullName: fullName,
             phonetype: type,
             phoneNumber: phone,
             email: email
             });
          return list;
          }, []).sort(function(a, b) {
          var nameA = a.name.toUpperCase();
          var nameB = b.name.toUpperCase();
          if (nameA < nameB) {
            return -1;
          }
            if (nameA > nameB) {
            return 1;
          }
            return 0;
          });
          
          resolve(pcontacts)
     })
}
                       
     async function waitforContacts(){
        var ts = await resolveAfter();
        return ts
     }

     waitforContacts().then((successMessage) => {
      $scope.phoneContacts = successMessage
      setTimeout(function(){
        animate.loader.unload();
      }, 2500);
    });
                       
    }
    return this
}
           
//window.CNContactStore = new CNContactStore ( )


