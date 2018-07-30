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


