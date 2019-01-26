// Khi trạng thái thay đổi thì đối tượng phải thay đổi theo
// Ví dụ ở dưới: khi count thay đổi thì state phải thay đổi theo

var red = function(){
    this.name = "Red";
    this.go = function(){
        return new green();
    }
};
var green = function(){
    this.name = "Green";
    this.go = function(){
        return new yellow();
    }
};
var yellow = function(){
    this.name = "Yellow";
    this.go = function(){
        return new red();
    }
};

var trafficlight = function(time){
    this.state = new red();
    this.start = function(){
        this.count = time;
        while(this.count > 0){
            console.log("This light is " + this.state.name + " and have " + this.count + "s");
            this.count--;
        }
        this.state = this.state.go();
        this.start();
    };
};

var traff = new trafficlight(5);
traff.start();