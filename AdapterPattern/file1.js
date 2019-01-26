var oldUser = function (){
    this.request = function(old){
        return old;
    }
    return this.request;
}

module.exports = oldUser();