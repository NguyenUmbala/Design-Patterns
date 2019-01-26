// Quan sát các sự kiện xảy ra
// Khi xảy ra các sự kiện thì xuất thông báo
// Thích hợp cho các trình hướng sự kiện


var Male = function(){
    this.type = [];
}

Male.prototype = {
    add: function(human){
        this.type.push(human);
        this.notiAdd(human);
    },
    remove: function(human){
        this.type = this.type.filter(function(item){
            if(item !== human){
                return item;
            }
        });
        this.notiRemove(human);
    },
    notiAdd: function(human){
        console.log(human + " da duoc add");

    },
    notiRemove: function(human){
        console.log(human + " da bi remove");
    }
}

var nam = new Male();
nam.add("an");
nam.add("hung");
nam.add("nghia");
nam.remove("an");