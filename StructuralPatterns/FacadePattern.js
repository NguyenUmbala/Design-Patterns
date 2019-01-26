// Là một giao diện giúp che giấu phần xử lý phía sau
// chỉ show cho người dùng thấy những thứ cần thấy

function Register(){
    this.check = function(acc, pass){
        if((new Account().checkAcc(acc)) && (new Password().checkPass(pass)))
            return true;
        else
            return false;
    };
}

function Account(){
    this.listAcc = ["Nguyen", "Hung"];
    this.checkAcc = function(acc){
        for (var i in this.listAcc){
            if(this.listAcc[i] == acc)
                return true;
        }
        console.log("acc");
        return false;
    };
}
function Password(){
    this.listPass = ["1", "2"];
    this.checkPass = function(pass){
        for (var i in this.listPass){
            if(this.listPass[i] == pass)
                return true;
        }
        return false;
    };
}

var nguyen = ["Nguyen", "1"];
var regis = new Register();
if (regis.check(nguyen[0],nguyen[1]))
    console.log("Dang nhap thanh cong");
else
    console.log("Dang nhap that bai");
