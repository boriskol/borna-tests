console.log("-----------promises----------------");


let promise = new Promise((resovle, reject) => {
    setTimeout(() => {
        resovle();
    }, 3000);
    //
    //reject();
});

promise.then(() => console.log("finely finished"))
    .then(() => console.log("i was also run"))
    .catch(() => console.log("uh ohhhh"));

let promise2 = new Promise((resovle, reject) => {
    var request = new XHTMLRequest();
    request.onload = () => {
        resovle();
    }
});

promise2.then(() => console.log("finely finished"))
    .then(() => console.log("i was also run"))
    .catch(() => console.log("uh ohhhh"));



var p1 = Promise.resolve( 42 );
var p2 = new Promise( function pr(resolve){
    resolve( 42 )
})


let url = "https://b-2-studio.com/musicartistApp/database/getDataFromDatabase.php";
var theP = fetch(url).then(function(response){
    return response.json();
}).then(function(data){
    return console.log(data)
})
//var p1 = Promise.resolve( theP );
var p2 = new Promise( function pr(resolve){
    resolve( theP )
})




var p1 = Promise.resolve( 42 );
var p2 = new Promise( function pr(resolve){
    setTimeout( function(){
        resolve( 43 )
    }, 100)
    
})
var p3 = 44;
var p4 = new Promise( function pr(resolve, reject){
    setTimeout( function(){
        reject( 'Opps' )
    }, 10)
    
})
Promise.all([p1,p2,p3]).then(function fulfilled(vals){
    console.log(vals)
})
Promise.all([p1,p2,p3,p4]).then(
    function fulfilled(vals){
        console.log(vals)
    },
    function reject(reasen){
        console.log(reasen)
    }
);
Promise.race([p2,p1,p3]).then(function fulfilled(vals){
    console.log(vals)
})
Promise.race([p1,p4]).then(
    function fulfilled(vals){
        console.log(vals)
    },
    function reject(reasen){
        console.log(reasen)
    }
);

console.log('-------------fetch-----------------');

let url = "https://b-2-studio.com/musicartistApp/database/getDataFromDatabase.php";
let url1 = "https://jsonplaceholder.typicode123.com/posts123456/";

fetch(url).then(function(response){
    return response.json();
}).then(function(data){
    return data;
})

fetch(url).then(response => response.json()).then(data => console.log(data));

fetch(url1).then(response => console.log(response)).catch(error => console.log(error));





// Refactor getStudents and getScores to return  Promise for their response bodies
console.log("-----------promises and fetch----------------");


let urlV = "https://b-2-studio.com/musicartist/getAllNews.php";
let urlD = "https://b-2-studio.com/PushNotificationiOS/getstorePurches.php";
function getStudents(){
  return fetch(urlV, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }).then((response) => response.json())
};

function getScores(){
  return fetch(urlD, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }).then((response) => response.json())
};

// Request both students and scores in parallel and return a Promise for both values.
// `Promise.all` returns a new Promise that resolves when all of its arguments resolve.
function getStudentsAndScores(){
  return Promise.all([getStudents(), getScores()])
}

// When this Promise resolves, both values will be available.
getStudentsAndScores()
  .then(([students, scores]) => {
    // both have loaded!
    console.log(students, scores);
  })

/*

*/
