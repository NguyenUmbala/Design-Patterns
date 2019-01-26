function car(name, color){
    this.name = name;
    this.color = color;
    this.toString = function() {
        return this.name + " co mau " + this.color;
    };
}
// car.prototype.toString = function(){
//         return this.name + " co mau " + this.color;
// };

var toyota = new car("Toyota","trang");
console.log(toyota.toString());