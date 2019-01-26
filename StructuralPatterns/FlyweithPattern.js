// Chia nhỏ ra thành từng loại 

var type = function(height, weight){
    this.height = height;
    this.weight = weight;
};

var typeCollection = (function(){
    var types = {};
    return {
        get: function(height, weight){
            if(!types[height + weight]){
                types[height + weight] = new type(height, weight);
            }
            return types[height + weight];
        },
        getCount: function(){
            var count = 0;
            for (i in types)    count++;
            return count;
        }
    }
})();

function Car(height, weight, name){
    this.type = typeCollection.get(height, weight);
    this.name = name;
    this.height = height;
    this.weight = weight;
}

function Garage(){
    this.cars = {};
    this.count = 0;
    this.add = function(height, weight, name){
        this.cars[name] = new Car(height, weight, name);
        this.count ++;
    };
    this.getCountType = function(){
        return typeCollection.getCount();
    };
}


var gara = new Garage();
gara.add(8, 2, "1");
gara.add(1, 2, "2");
gara.add(1, 2, "3");
gara.add(1, 4, "4");
gara.add(1, 2, "5");
gara.add(1, 3, "6");
console.log(gara.getCountType());