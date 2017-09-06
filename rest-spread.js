console.log("------- rest-spread ---------");

function addNumbers(...numbers){
    return numbers.reduce((sum, number)=>{
        return sum + number;
    }, 0);


console.log(addNumbers(1,2,3,4,5,6,7));


const defaultColors = ['red', 'green'];
const userFavoriteColord = ['blue', 'yellow'];
const fallColors = ['fire red', 'fall orange'];

console.log([...defaultColors, ...userFavoriteColord]);
console.log([...defaultColors, userFavoriteColord]);
console.log([ ...defaultColors, ...userFavoriteColord, ...fallColors ]);
console.log([ 'bor', ...defaultColors, ...userFavoriteColord, ...fallColors ]);



function validateShopingList(...items){
    if(items.indexOf('milk') < 0){
        return ['milk', ...items];
    }
    return items;
}

console.log(validateShopingList('oranges', 'bread', 'eggs') );




