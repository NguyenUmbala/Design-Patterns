// Duyệt mảng
// Giúp chia nhỏ mảng ra
// Duyệt nhanh hơn 

var Arr = function(items){
    this.index = 0;
    this.item = items;
    this.first = function(){
            this.index = 0;
            return this.item[0];
    };
    this.next = function(){
        if(this.hasNext()){
            this.index++;
            return this.item[this.index];
        }
    };
    this.current = function(){
        return this.item;
    }
    this.hasNext = function(){
        if(this.index<items.length)
            return true;
        return false;
    }
    this.each = function(){
            for(var item = this.first(); this.hasNext(); item = this.next())
                console.log(item);
    };
}


var items = ["1asd", "2asd", "3ad"];
var item = new Arr(items);

item.each();
console.log(item.hasNext());

