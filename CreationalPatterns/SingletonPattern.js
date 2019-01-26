var ToyotaSingleton = (function(){
    var instantiated;

    function init(){
        return {
            review: function(text){
                return "Danh gia xe Toyota: " + text;
            }
        };
    }
    
    return {
        getInstance: function(){
            if(!instantiated)
                instantiated = init();
            return instantiated;
        }
    };
})();

console.log(ToyotaSingleton.getInstance().review("Chat luong tuyet voi"));