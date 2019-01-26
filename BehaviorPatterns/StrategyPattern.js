// Thay đổi cách xử lí đối với 1 đối tượng
// Ví dụ như thay SelectionSort = QuickSort

var Human = function(){
    this.type = null;
};
Human.prototype = {
    setType: function(type){
        this.type = type;
    },
    say: function(){
        this.type.say();
    }
    
}

var Male = function(){
    this.say = function(){
        console.log("Dan ong");
    }
}
var Female = function(){
    this.say = function(){
        console.log("Phu nu");
    }
}

var alice = new Human();
alice.setType(new Female());
alice.say();