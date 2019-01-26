// Có tác dụng như trạm trung chuyển.
// Có vai trò trung gian thực hiện giao tiếp giữa các đối tượng

var Human = function(name){
    this.name = name;
    this.chatRoom = null;
};
Human.prototype.send = function(mess, to){
    this.chatRoom.send(mess, this, to);
}


var ChatRoom = function(){
    var users = {};

    return {
        register: function(human){
            human.chatRoom = this;
            users[human.name] = human;
        },
        send: function(mess, from, to){
            console.log(from.name + " to " + to.name + ": " + mess);
        }
    }
};

var nam = new Human("Nam");
var nu = new Human("Nu");
var room = new ChatRoom();

room.register(nam);
room.register(nu);

nam.send("Hello", nu);
nu.send("Xin chao", nam);