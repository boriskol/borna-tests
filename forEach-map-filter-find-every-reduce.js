//var closeBttn = overlay.querySelector( 'a.overlay-close' );
//closeBttn.addEventListener( 'click', toggleOverlay );

console.log("forEach-map-filter-find-every-reduce");

/// forEach
console.log("---forEach----");
var colors = ['red', 'blue', 'green'];

colors.forEach(function(color) {
    console.log(color);
});

var numbers = [1, 2, 3, 4, 5];
var sum = 0;
numbers.forEach(function(number) {
    sum += number;
});
console.log(sum);

function adder(number) {
    sum += number;
}
numbers.forEach(adder);
console.log(sum);

var posts = [
    { id: 2, title: 'Daily JBorna' },
    { id: 23, title: 'Daily JS News' },
    { id: 52, title: 'Code Refactor City' },
    { id: 105, title: 'The Brightest Ruby' }
];
function handlePosts(post) {
    console.log(post.title);
}
posts.forEach(handlePosts);

var images = [
    { height: 10, width: 30 },
    { height: 20, width: 90 },
    { height: 54, width: 32 }
];
var areas = [];
function calculate(image) {
    var area = image.height * image.width;
    areas.push(area)
}
images.forEach(calculate);
console.log(areas);



//map
console.log("-------------------------map------------------------------------");
var numbers = [1, 2, 3, 4, 5];
var doubleNumbes = [];
var double = numbers.map(function(number) {
    return number * 2;
});
console.log(double);

var titles = posts.map(function(post) {
    return post.title;
});
console.log(titles);

var heights = images.map(function(image) {
    return image.height;
});
console.log(heights);

var trips = [
    { distance: 34, time: 10 },
    { distance: 90, time: 50 },
    { distance: 59, time: 25 }
];
var speeds = trips.map(function(trip) {
    //return trip.distance + "," + trip.time;
    return `${trip.distance}, ${trip.time}`;
});
console.log(speeds);
let mmm = speeds.map(([x,y]) =>{
   // return {x:x, y:y};
    return {x, y};
});
console.log(mmm);


var paints = [{ color: 'red', type: 'veg', quantity: 0, price: 1 },
    { color: 'blue', type: 'not', quantity: 10, price: 15 },
    { color: 'yellow', type: 'veg', quantity: 13, price: 8 }
];
function pluck(array, property) {
    var propertyA = array.map(function(paint) {
        //console.log(property);
        if (paint.hasOwnProperty(property)) {
            return paint.color;
        }
    });
    return propertyA;
}
var a = pluck(paints, 'color');
console.log(a);



///filter
console.log("------------------------------filter-------------------------------------");
var vegetable = paints.filter(function(paint) {
    return paint.type === "veg"
});
console.log(vegetable);

var vegetablePrice = paints.filter(function(paint) {
    return paint.type === "veg" && paint.quantity > 0 && paint.price < 10;
});
console.log(vegetablePrice);

var postsB = [
    { id: 2, title: 'Daily JBorna' },
    { id: 23, title: 'Daily JS News' },
    { id: 52, title: 'Code Refactor City' },
    { id: 105, title: 'The Brightest Ruby' }
];
var postB = { id: 2, title: 'Daily JBorna' };
var postC = { id: 1, title: 'Daily J' };
function commentsPost(pos, posts) {
    return posts.filter(function(post) {
        return post.id === pos.id;
    });
};
var b = commentsPost(postB, postsB);
console.log(b);

var numbersA = [15, 25, 35, 45, 55, 65, 75, 85, 95];
var filteredNumbers = numbersA.filter(function(number) {
    return number > 50
});
console.log(filteredNumbers);

var users = [
    { id: 1, admin: true, name: 'jill' },
    { id: 2, admin: false, name: 'Alex' },
    { id: 3, admin: false, name: 'Bill' },
    { id: 4, admin: false, name: 'Borna' },
    { id: 5, admin: true, name: 'Eric' },
];

var filteredUsers = users.filter(function(user) {
    return user.admin === true;
});
console.log(filteredUsers);


var numbersB = [10, 20, 30];
function reject(array, iteratorFunction) {
    var lessThanFifteen = array.filter(function(number) {
        if (number < iteratorFunction) {
            return number
        }
    });
    return lessThanFifteen;
}
var c = reject(numbersB, 15);
console.log(c);

console.log("------------------------------------find-------------------------------------");
var user = users.find(function(user) {
    return user.name === "Borna"
});
console.log(user);

function Car(model) {
    this.model = model;
}
var cars = [
    new Car("Buick"),
    new Car("Camaro"),
    new Car("Focus")
];
var cc = cars.find(function(car) {
    return car.model === 'Focus';
});
console.log(cc);

var comment = { id: 2, title: 'Daily JBorna' };
function postForComments(posts, comment) {
    return posts.find(function(post) {
        return post.id === comment.id;
    });
}
var e = postForComments(posts, comment);
console.log(e);

var accounts = [
    { balance: -10 },
    { balance: 12 },
    { balance: 0 }
];
var account;
function count(accounts) {
    
    var b = accounts.find(function(bal) {
        return bal.balance === 12
    })
    account = b;
    return account
}
count(accounts);
console.log(count(accounts));

var ladders = [
    { id: 1, height: 20 },
    { id: 3, height: 25 },
    { id: 4, height: 55 },
    { id: 4, height: 75 }
];
function findWhere(array, criteria) {
    var a = array.find(function(ar) {
        if (ar.height === criteria) {
            return ar
        }
    });
    return a;
}
findWhere(ladders, 25);
console.log(findWhere(ladders, 25));

console.log("--------------------------------------- every and some ----------------------------------");

var every = ladders.every(function(ladder) {
    return ladder.height > 15 && ladder.height < 100;
});
console.log(every);

var some = ladders.some(function(ladder) {
    return ladder.height > 125;
});
console.log(some);

var names = ["borna", "Jacica", "miran", "ivor", "joe"];

var everyA = names.every(function(name) {
    return name.length > 5;
});
console.log(everyA);

var someA = names.some(function(name) {
    return name.length > 5;
});
console.log(someA);
/*
function Field(value){
    this.value = value;
}
Field.prototype.validate = function(){
    return this.value.length > 0;
}
var username = new Field ("2cool");
var password = Field("my_password");
var birthday = new Field("10/10/10");

var fields = [username, password, birthday];

var formsvalid = fields.every(function(field){
    return field.validate();
});

if(formsvalid){
    console.log(formsvalid);
}else{
    console.log("is not " + formsvalid);
}
*/
var requests = [
    { url: '/photos', status: 'complete' },
    { url: '/albums', status: 'pending' },
    { url: '/users', status: 'failed' }
];

var inProgress = requests.some(function(req) {
    return req.status === "pending"
});
console.log(inProgress);

console.log("-------------------------------------------------- reduce ----------------------------------");

var numbersC = [10, 20, 30];
var sum = 0;
var sumB = numbersC.reduce(function(sum, numbersC) {
    return sum + numbersC
}, 0);
//*}, 0); this is initial value*//
console.log(sumB);

var primaryColors = [
    { color: 'red' },
    { color: 'yelow' },
    { color: 'blue' }
];
var pm = primaryColors.reduce(function(previous, primaryColors) {
    previous.push(primaryColors.color);
    return previous;
}, []);
console.log(pm);

function balacedParens(string) {
    return !string.split("").reduce(function(previous, char) {
        if (previous < 0) {
            return previous;
        }
        if (char === "(") {
            return ++previous;
        }
        if (char === ")") {
            return --previous;
        }
        return previous;
    }, 0)
};

//balacedParens('()');

if (balacedParens(')(')) {
    console.log(balacedParens(')('));
} else {
    console.log("false");
}

var trips = [{ distance: 34 }, { distance: 12 }, { distance: 1 }];
var sum = 0;
var totalDistance = trips.reduce(function(returnValue, s) {
    return sum += s.distance;
}, 0);
console.log(sum);

var desks = [
    { type: 'sitting' },
    { type: 'standing' },
    { type: 'sitting' },
    { type: 'sitting' },
    { type: 'standing' }
];

/*function standingSitting(array) {
    return array.reduce(function(r, a) {
        var standing = a.find(function(desk) {
            return desk.type === 'standing';
        });
        var sitting = a.find(function(desk) {
            return desk.type === 'sitting';
        });
        console.log(standing);
        return r;
    }, { sitting: 0, standing: 0 });
}*/

function standingSitting(array) {
    return array.reduce(function(r, a) {
        var standing = array.filter(function(desk) {
            return desk.type === 'standing';
        });
        var sitting = array.filter(function(desk) {
            return desk.type === 'sitting';
        });
        //r.push({sitting: standing.length ,standing:sitting.length})
        return { sitting: standing.length, standing: sitting.length };
    }, { sitting: 0, standing: 0 });
}
var st = standingSitting(desks);
console.log(st);


var numbersD = [1, 5, 1, 2, 3, 4, 4, 10, 20, 10, 21];
function unique(array) {
    return array.reduce(function(a, b) {
        var isIn = a.find(function(element) {
            return element === b;
        });
        if (!isIn) {
            a.push(b);
        }
        return a;
    }, []);
}
var ret = unique(numbersD);
ret.sort(function(a, b) {
  return a - b;
});
console.log(ret);









