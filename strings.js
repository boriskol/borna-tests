

console.log("------- let const ---------");

const name = 'Borna';
let nickname ='libs';

nickname = 'libertines';

console.log(name +", "+ nickname);

function count(targetString){
    const characters = ["a", "e","i","o","u"];
    let number = 0;
    for (var i =0; i < targetString.length; i++){
        if(characters.includes(targetString[i])){
            number++;
        }
    }
    return number;
}
var count = count("aniucblivaeuriuvebniueaiv");
console.log(count);

//new joning strings
function getMessage(){
    const year = new Date().getFullYear();
    return `This year is ${year}`;
    //return `This year is ${new Date().getFullYear()}`;
}
let yearA = getMessage();
console.log(yearA);


const device_id = 4;
const guid = 20;
const username= "me";

const data = `{"device_id":"${device_id}", "guid":"${guid}", "username":"${username}"}`
console.log(data);

function upper(s){
    return s.toUpperCase();
}
var who = "reader"
var text = `A very ${upper("warm")} welcome to all of you ${upper(`${who}s`)}!`;
console.log(text)


function bar(){
    return function foo(string, ...values){
        console.log(string);
        console.log(values)
    }
}
var desc = "awsome"
bar()`Evrything is ${desc}!`;

function tag(strings, ...values){
    return strings.reduce( function(s,v,idx){
        return s + (idx > 0 ? values[idx-1] : "") + v;
    }, "" );
}
var txt = tag`Evryth;ing is ${desc}!`;
console.log( txt )


function dollarbillsyall(strings, ...values){
    return strings.reduce( function(s,v,idx){
        if(idx > 0){
            if (typeof values[idx-1] == 'number'){
                s += `$${values[idx-1].toFixed(2)}`;
            }else{
                s += values[idx-1];
            }
        }
        return s + v
    }, "")
}
var amt1 = 11.99, amt2 = amt1 * 1.08, name = "Kyle"
var text = dollarbillsyall`Thanks for your purchase, ${name}! Your product cost was ${amt1}, which with tax comes out to ${amt2}`
console.log(text);

function showraw(strings, ...values){
    console.log(strings);
    console.log(strings.raw)
}
showraw`Thanks\nWorld for your purchase, ${name}! Your product cost was ${amt1}, which with tax comes out to ${amt2}`



