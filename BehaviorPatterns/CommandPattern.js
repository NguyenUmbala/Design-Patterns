// Đóng gói và tham số hóa các đối tương
// Đưa nhiều đối tương vào 1 luồng chạy duy nhất



function add(a,b){ return a+b;}
function sub(a,b){ return a-b;}
function mul(a,b){ return a*b;}
function div(a,b){ return a/b;}

var Cmd = function(execute, value){
    this.execute = execute;
    this.value = value;
};

function AddCmd(value){ return new Cmd(add, sub, value);}
function SubCmd(value){ return new Cmd(sub, add, value);}
function MulCmd(value){ return new Cmd(mul, div, value);}
function DivCmd(value){ return new Cmd(div, mul, value);}

var Calculator = function(){
    var value = 0;
    return{
        execute: function(cmd){
            value = cmd.execute(value, cmd.value);
        },
        show: function(){
            console.log("Value: " + value);
        }
    }
};

var cal = new Calculator();
cal.execute(new AddCmd(3));
cal.execute(new MulCmd(3));
cal.execute(new SubCmd(5));
cal.execute(new DivCmd(2));
cal.show();