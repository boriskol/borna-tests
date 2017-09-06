

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














