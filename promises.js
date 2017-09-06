console.log("-----------promises----------------");


let promise = new Promise((resovle, reject) => {

    setTimeout(() => {
        resovle();
    }, 3000);
    //
    //reject();

});

promise
    .then(() => console.log("finely finished"))
    .then(() => console.log("i was also run"))
    .catch(() => console.log("uh ohhhh"));


let promise2 = new Promise((resovle, reject) => {

    var request = new XHTMLRequest();
    request.onload = () => {
        resovle();
    }

});

promise2
    .then(() => console.log("finely finished"))
    .then(() => console.log("i was also run"))
    .catch(() => console.log("uh ohhhh"));


console.log('-------------fetch-----------------');

let url = "http://b-2-studio.com/musicartistApp/database/getDataFromDatabase.php";
let url1 = "https://jsonplaceholder.typicode123.com/posts123456/";


fetch(url).then(response => response.json()).then(data => console.log(data));

fetch(url1)
    .then(response => console.log(response))
    .catch(error => console.log(error));
