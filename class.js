console.log("------- class ---------");

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
}

const toyota = new Toyota({color:'red', title:'daily drive'});
var ttt = toyota.honk();
var tttD= toyota.drive();
console.log(ttt);
console.log(tttD);
//console.log(toyota.title);


