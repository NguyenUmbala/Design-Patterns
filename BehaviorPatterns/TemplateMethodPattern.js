// Tương tự như kế thừa trong oop
// Các thành phần được lặp lại sẽ bỏ chung vào 1 method
// Thích hợp cho code oop

var data = function(){
    this.setName = function(name){
        this.name = name;
    }
    this.open = function(){
        console.log("Open" + this.name);
    };
    this.say = function(){
        console.log("Hello " + this.name);
    };
    this.close = function(){
        console.log("Close " + this.name);
    };
    this.process = function(){
        this.open();
        this.say();
        this.close();
    }
};

var inherit = function(dulieu){
    var dt = function(){ };
    dt.prototype = dulieu;
    return new dt();
};

var server1 = inherit(new data());
server1.setName("Server 1");
server1.process();

var server2 = inherit(new data());
server2.setName("Server 2");
server2.process();