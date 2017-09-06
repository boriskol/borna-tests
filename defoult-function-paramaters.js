console.log("------- defoult-function-paramaters ---------");


const canvasDim = function(width, initialHeight) {
    if (!initialHeight) {
        initialHeight = 20;
        const height = initialHeight * 9 / 16;
        return { width, height };
    } else {
        const height = initialHeight * 9 / 16;
        return { width, height };
    }
}

const canvasDimD = function(width, initialHeight = 20) {
        const height = initialHeight * 9 / 16;
        return { width, height };
}

console.log(canvasDim(2));
console.log(canvasDimD(2,10));
console.log(canvasDimD(2,null));


function User(id){
    this.id = id;
}

function generateId(){
    return Math.random() * 99999999;
}

//function createAdminUser(user){
function createAdminUser(user = new User(generateId())){
    user.admin = true;
    return user;
}
const userD = new User(generateId());
console.log(createAdminUser(userD));
console.log(createAdminUser());






