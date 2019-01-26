// Giống linked list
// Thường gặp khi rút tiền ATM,..
// Khi A không xử lý được sẽ chuyển qua B, B không được thì tới C,..

function Animal(name, index){
    this.index = index;
    this.name = name;
    this.say = function(){
        console.log("This is " + name);
    }
    this.bigger = function(cat){
        if(!cat){
            console.log(name + " la chua te son lam");
            return;
        }
        if(this.index<cat.index){
            console.log(name + " yeu hon " + cat.name);
            console.log(name + " khong manh hon cac con con lai");
        }
        else {
            console.log(name + " manh hon " + cat.name);
            this.bigger(cat.animalNext);
        }
    }
}



function Cat(name){
    this.index = 3;
    this.animalNext = null;
    this.super_ = Animal;
    this.super_.call(this, name, this.index);
    this.next = function(animal){
        this.animalNext = animal;
    }
}

function Dog(name){
    this.index = 5;
    this.animalNext = null;
    this.super_ = Animal;
    this.super_.call(this, name, this.index);
    this.next = function(animal){
        this.animalNext = animal;
    }
}

function Tiger(name){
    this.index = 7;
    this.animalNext = null;
    this.super_ = Animal;
    this.super_.call(this, name, this.index);
    this.next = function(animal){
        this.animalNext = animal;
    }
}

var lion = new Animal("Messi", 67);
var meo = new Cat("meo");
var cho = new Dog("cho");
var cop = new Tiger("cop");
lion.name = "adsf";
meo.next(cho);
cho.next(cop);

lion.bigger(meo);
meo.noi();