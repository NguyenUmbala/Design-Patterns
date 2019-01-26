function login(){
    return true;
}
var newUser = function(){
    return {
        login: login(),
        request: function(old){
            return old;
        }
    }

}

module.exports = newUser();