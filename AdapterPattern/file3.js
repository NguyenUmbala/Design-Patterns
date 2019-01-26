// Khi có các bản cập nhật mới (newUser) thì bản cũ oldUser không sử dụng được
// Do đó cần có adater để có thể sử dụng newUser với các thuộc tính như oldUser


oldUser = require('./file1');
newUser = require('./file2');

var adapter = function(){
    var customer = "umbala";
    return {
        request : function(){
            newUser.login;
            return newUser.request(78);
        }
    } 
}

console.log(adapter().request());