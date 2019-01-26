// Không cho phép truy xuất vào các phương thức của object


function vColor(){
    // var eTable = ["Red", "Green", "Yellow"];
    // var table = ["Do", "Xanh", "Vang"];
    this.getColor = function(color){
        if(color == "Red")          return "Do";
        else if(color == "Green")   return "Xanh";
        else if(color == "Yellow")  return "Vang";
        else                        return "Khong xac dinh";
    };
}

function colorProxy(){
    this.color = new vColor();
    this.getColor = function(color){
        return this.color.getColor(color);;
    };
}

var mau = new colorProxy();
console.log(mau.getColor("Green"));
console.log(mau.getColor("Red"));
console.log(mau.getColor("Yellow"));
console.log(mau.getColor("abc"));