// Cách hoạt động của Prototype

function Animal(name){
    this.name = name;
    this.say = function(){
        console.log("This is " + name);
    }
}

function Dog(name){
    // this.say = function(){
    //     console.log("gau gau gau");
    // }

    this.super_ = Animal;
    this.super_.call(this, name);
    this.name = name;

}

// prototype không hoạt động
// Làm cách nào để  public function say và function vẫn hoạt động
Dog.prototype.say = function(){ 
    console.log("gau gau gau");
}

var name = "Alice";
var myDog = new Dog(name);
myDog.say();