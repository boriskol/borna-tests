
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

//Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
function even_or_odd(number) {
  var x = number % 2;
  if (x === 0) {
    return "Even";
  } else {
    return "Odd";
  };
}
even_or_odd(2)
even_or_odd(0)
even_or_odd(7)
even_or_odd(1)

function repeatStr (n, s) {
    var accumulatedStr = "";
    while (n > 0) {
        accumulatedStr += s
        n--;
    }
    return accumulatedStr;
}
function repeatStr (n, s) {
  return s.repeat(n);
}
repeatStr = (n, s) => s.repeat(n)
repeatStr(3, "*")
repeatStr(5, "#")
repeatStr(2, "ha ")


function makeNegative(num) {
  return -Math.abs(num);
}

function copyarrayandmultiplyby2(array){
  const output = [];
  for(let i=0; i<array.length; i++){
    output.push(array[i]*2);
  }
  return output;
}
const myArray = [1,2,3];
const res = copyarrayandmultiplyby2(myArray)


function copyArrayAndMultiplate(array, instruction){
  const output = [];
  for (let i = 0; i<array.length; i++){
    output.push(instruction(array[i]));
  }
  return output;
}
function multiplyBy2(input){
  return input * 2;
}
const result = copyArrayAndMultiplate([1,2,3,4], multiplyBy2)



///
const str = 'this is foo bar';
const count = [...str].filter(l => l === 'o').length;
console.log(count);

//////
/////
function duplicateCount(text){
  var arr = text.toLowerCase().split(''); 
  var newArr = arr.filter(function(a, b) {
    return arr.indexOf(a) !== b;
  });
  return newArr.filter(function(item, pos) {
    return newArr.indexOf(item) == pos;
  }).length;
}
// Other Solutions
function duplicateCount(text){
  return text.toLowerCase().split('').filter(function(val, i, arr){
    return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
  }).length;
}
function duplicateCount(text) {
  var dup = [];
  text.toLowerCase().split('').forEach(function(v, i, arr) {
    if(i != arr.lastIndexOf(v) && dup.indexOf(v) == -1) dup.push(v);
  });
  return dup.length;
}
function duplicateCount(text){
  return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
}
function duplicateCount(text){
  return text
      .toLowerCase()
      .split('')
      .reduce(function(a, l) {
        a[l] = a[l] ? a[l]+1 : 1;
        if(a[l] === 2) a.count++;
        return a;
      }, {count:0}).count;
}
  
//duplicateCount("");
//duplicateCount("abadcde");
//duplicateCount("aabbcde");
//duplicateCount("aabBcde");
//duplicateCount("Indivisibility");
duplicateCount("Indivisibaailities");


////
var array1 = [true,  true,  true,  false,
              true,  true,  true,  true ,
              true,  false, true,  false,
              true,  false, false, true ,
              true,  true,  true,  true ,
              false, false, true,  true ];

function countSheeps(arrayOfSheep) {
  var searchSheep = true;
  var count = arrayOfSheep.reduce(function(n, val) {
    return n + (val === searchSheep);
  }, 0);
  return count
}
//filter
function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}
//map
function countSheeps(arrayOfSheep) {
  var count = 0;
  arrayOfSheep.map(function(current){
  if(current){
    count += 1;
  }
  });
  return count;
}
//reduce
function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.reduce(function(x,y){
    return x + (y || false);
  });
}
countSheeps(array1)


////Your task is to make a function that can take any non-negative integer as a argument 
//and return it with its digits in descending order. Essentially, 
//rearrange the digits to create the highest possible number.
let example = 21446;
function descendingOrder(n){
  var newArr = [],
      newString = n.toString();
  for(var i=0; i < newString.length; i++) {
    newArr[i] = newString[i];
  }
  return parseInt(newArr.sort().reverse().join(''))
}
function descendingOrder(n){
  var newArr = [], newString = n.toString();
  for(var i=0; i < newString.length; i++) {
    newArr[i] = newString[i];
  }
  return parseInt(newArr.sort().reverse().join(''))
}
function descendingOrder(n){
  let arr = n.toString().split('');
  let arrNum = [];
  console.log(arr);
  for(var i = 0; i < arr.length; i++){
    arrNum.push(parseInt(arr[i]));
    console.log(arrNum)
  }
  
  let sorted = arrNum.sort(function(a, b){return b-a});
  let sorted2 = sorted.join('');
  return parseInt(sorted2);
}
function descendingOrder(n){
  return parseInt(n.toString().split('').sort(function(a, b){
    return b - a;
  }).join(''));
}
function descendingOrder(n){
  return parseInt(String(n).split('').sort().reverse().join(''))
}
function descendingOrder(n) {
  return +n.toString().split('').sort().reverse().join('');
}
function descendingOrder(n) {
  return n.digits().sort().reverse().undigits();
}
Number.prototype.digits = function() {
  const result = [];
  let n = this;
  do {
    result.unshift(n % 10);
    n = Math.floor(n / 10);
  } while(n);
  return result;
};

Array.prototype.undigits = function() {
  return this.reduce((n, d) => n * 10 + d, 0);
};

descendingOrder(12243456);
descendingOrder(example);

 
 /* PUSH PAYLOAD

{
  "aps": {
    "alert": {
    "title": "New Posts!",
    "subtitle": "subtitlr",
    "body": "body"
    },
    "sound": "default",
    "category": "myCategory",
    "mutable-content": 1,
    "link": "https://pitchfork.com/news/katy-perry-denies-dr-luke-raped-her-in-unsealed-lawsuit-deposition",
    "attachment-url": "https://media.pitchfork.com/photos/5b21a0ebc87cd85577eaf67d/2:1/w_790/Katy-Perry.jpg"
  }
}

 */
/// o

function userCreator(name, score){
  const newUser = {}
  newUser.name  = name;
  newUser.score = score;
  newUser.increment = function(){
    newUser.score++;
  }
  return newUser
}
const user1 = userCreator("borna",3)
//const user2 = userCreator("bo",5)
user1.increment()
////
function userCreator(name, score){
  const newUser = Object.create(functionStore)
  newUser.name  = name;
  newUser.score = score;
  
  return newUser
}
const functionStore = {
  increment: function(){ this.score++}.
  login: function(){console.log("you r log in")}
}
const use1 = userCreator("borna", 3);

///
function UserCreator(name, score){
  this.name  = name;
  this.score = score;
}
UserCreator.prototype.increment = function() {
  this.score++;
};
UserCreator.prototype.login = function() {
  console.log("you r log in");
};
const use1 = new UserCreator("borna", 3);
use1.increment()



class UserCreator{
  constructor(name,score){
    this.name = name;
    this.score = score;
  }
  increment(){
    return this.score++;
  }
  login(){
    console.log("you r log in")
  }
}
const use1 = new UserCreator("borna", 3);
use1.increment()










/////
<!DOCTYPE html>
<html>
   <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta name="author" content="Aurelio De Rosa">
      <title>Screen Orientation API Demo by Aurelio De Rosa</title>
      <style>
         *
         {
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
         }

         body
         {
            max-width: 500px;
            margin: 2em auto;
            padding: 0 0.5em;
            font-size: 20px;
         }

         h1
         {
            text-align: center;
         }

         .api-support
         {
            display: block;
         }

         .hidden
         {
            display: none;
         }

         .value
         {
            font-weight: bold;
         }

         .button-demo
         {
            padding: 0.5em;
            margin: 1em;
         }

         .author
         {
            display: block;
            margin-top: 1em;
         }
      </style>
   </head>
   <body>
      <h1>Screen Orientation API</h1>

      <span id="so-unsupported" class="api-support hidden">API not supported</span>

      <div id="so-results">
         <p>
            The orientation of the device is <span id="orientation" class="value">unavailable</span>
         </p>
         <form id="form-orientation">
            <label for="orientation">Lock the device in:</label>
            <select id="orientation-type">
               <option value="portrait">portrait</option>
               <option value="landscape">landscape</option>
               <option value="portrait-primary">portrait-primary</option>
               <option value="portrait-secondary">portrait-secondary</option>
               <option value="landscape-primary">landscape-primary</option>
               <option value="landscape-secondary">landscape-secondary</option>
            </select>
            <br />
            <input class="button-demo" id="lock-button" type="submit" value="Lock!" />
            <button class="button-demo" id="unlock-button">Unlock!</button>
         </form>
      </div>

      <small class="author">
         Demo created by <a href="http://www.audero.it">Aurelio De Rosa</a>
         (<a href="https://twitter.com/AurelioDeRosa">@AurelioDeRosa</a>).<br />
         This demo is part of the <a href="https://github.com/AurelioDeRosa/HTML5-API-demos">HTML5 API demos repository</a>.
      </small>

      <script>
         var prefix = 'orientation' in screen ? '' :
                      'mozOrientation' in screen ? 'moz' :
                      'msOrientation' in screen ? 'ms' :
                      null;

         if (prefix === null) {
            document.getElementById('so-unsupported').classList.remove('hidden');

            ['lock-button', 'unlock-button'].forEach(function(elementId) {
               document.getElementById(elementId).setAttribute('disabled', 'disabled');
            });
         } else {
            var form = document.getElementById('form-orientation');
            var select = document.getElementById('orientation-type');

            // Function needed to see lock in action
            function launchFullscreen(element) {
               if(element.requestFullscreen) {
                  element.requestFullscreen();
               } else if(element.mozRequestFullScreen) {
                  element.mozRequestFullScreen();
               } else if(element.webkitRequestFullscreen) {
                  element.webkitRequestFullscreen();
               } else if(element.msRequestFullscreen) {
                  element.msRequestFullscreen();
               }
            }

            function exitFullscreen() {
               if(document.exitFullscreen) {
                  document.exitFullscreen();
               } else if(document.mozCancelFullScreen) {
                  document.mozCancelFullScreen();
               } else if(document.webkitExitFullscreen) {
                  document.webkitExitFullscreen();
               } else if (document.msExitFullscreen) {
                  document.msExitFullscreen();
               }
            }

            function orientationHandler() {
               var orientationProperty = prefix + (prefix === '' ? 'o' : 'O') + 'rientation';
               document.getElementById('orientation').textContent = screen[orientationProperty];
            }

            screen.addEventListener(prefix + 'orientationchange', orientationHandler);
            document.getElementById('lock-button').addEventListener('click', function(event) {
               event.preventDefault();
               launchFullscreen(document.documentElement);

               setTimeout(function() {
                  screen[prefix + (prefix === '' ? 'l' : 'L') + 'ockOrientation'](select.value);
               }, 1);
            });
            document.getElementById('unlock-button').addEventListener('click', function() {
               exitFullscreen();
               screen[prefix + (prefix === '' ? 'u' : 'U') + 'nlockOrientation']();
            });

            orientationHandler();
         }
      </script>
   </body>
</html>

/*

async function downloadContent(urls) {
    const promiseArray = urls.map(async (url) => {
        const content = await httpGet(url);
        return content;
    });
    return await Promise.all(promiseArray);
}
*/

//http://www.b-2-studio.com/musicartistApp/database/getDataFromDatabase.php
//http://b-2-studio.com/musicartist/getViewsNews.php
//http://b-2-studio.com/musicartist/getLikeNews.php


/*function postRequest(url, data) {
    return fetch(url, {
        method: 'POST', // 'GET', 'PUT', 'DELETE', etc.
        body: data,//JSON.stringify(data), // Coordinate the body type with 'Content-Type'
        headers: new Headers({
          'Access-Control-Allow-Origin':'*',
          'Content-Type': 'application/json'
        })
    }).then(response => response.json())
}*/

/*const join = function(arr, separator = ',', end = separator) {
    return arr.reduce(
    (acc, val, i) =>
      i === arr.length - 2
        ? acc + val + end
        : i === arr.length - 1
          ? acc + val
          : acc + val + separator,
    ''
  )};
fetch(urlDevice).then(function(response){
    return response.json();
}).then(function(data){

    var pm = data.reduce(function(previous, phone) {
            previous.push(phone.device_id);
            console.log(phone.device_id)
            return previous;
    }, []);
    console.log(join(pm, ','));

        const ulA = document.getElementById('phones');
        let li = createNode('div'),
        p = createNode('span');
        p.innerHTML = join(pm, ',');
        p.classList.add("mystyle");
        append(li, p);
        append(ulA, li);
    

}).catch(function(error) {
    console.log(error);
}); 

*/


























