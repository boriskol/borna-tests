
function resolveAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
};


var add = async function(x) { // async function expression assigned to a variable
  var a = await resolveAfter2Seconds(20);
  var b = await resolveAfter2Seconds(30);
  return x + a + b;
};

add(10).then(v => {
  console.log(v);  // prints 60 after 4 seconds.
});


(async function(x) { // async function expression used as an IIFE
  var p_a = resolveAfter2Seconds(20);
  var p_b = resolveAfter2Seconds(30);
  return x + await p_a + await p_b;
})(10).then(v => {
  console.log(v);  // prints 60 after 2 seconds.
});

console.log("-----------async promises and fetch----------------");

let urlV = "https://b-2-studio.com/musicartist/getAllNews.php";
let urlL = "http://b-2-studio.com/musicartist/getLikeNews.php";
let urlF = "http://www.b-2-studio.com/musicartistApp/database/getDataFromDatabase.php";
//http://www.b-2-studio.com/musicartistApp/database/getDataFromDatabase.php
//http://b-2-studio.com/musicartist/getViewsNews.php
//http://b-2-studio.com/musicartist/getLikeNews.php
function getNewsViews(){
  return fetch(urlV, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }).then((response) => response.json())
};

function getNewsLikes(){
  return fetch(urlL, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }).then((response) => response.json())
};
function getFeatured(){
  return fetch(urlF, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }).then((response) => response.json())
};

// Request both students and scores in parallel and return a Promise for both values.
// `Promise.all` returns a new Promise that resolves when all of its arguments resolve.
function getNewsandVideo(){
  return Promise.all([getFeatured(), getNewsViews(), getNewsLikes()])
}

// When this Promise resolves, both values will be available.
/*getNewsandPhones().then(([students, scores]) => {
    // both have loaded!
    console.log(students, scores);
})*/

var add = async function() { // async function expression assigned to a variable
  var a = await getNewsandVideo()
  return a;
};

add().then(([video, views, loves]) => {
    // both have loaded!
    console.log(video, views, loves);
})


