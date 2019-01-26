// Thêm thuộc tính cho đối tượng

function user(name, old){
    this.name = name;
    this.old = old;
    this.say = function(){
        console.log("User: " + this.name + ", " + this.old + ", ");
    }
}
function decorateUser(user, sex){
    this.user = user;
    this.name = user.name;
    this.old = user.old;
    this.sex = sex;
    this.say = function(){
        console.log("Decorated User: " + this.name + ", " + this.old + ", " + this.sex);
    }
}

var nam = new user("Namm", 19);
nam.say();
var decorated = new decorateUser(nam, "Nam");
decorated.say();