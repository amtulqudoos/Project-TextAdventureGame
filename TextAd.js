const command = require("nodemon/lib/config/command");

class Room {
    constructor(name, description,){
    this._name = name;
    this._description = description;
    this._linkedRooms ={};
}
linkedRoom(direction, Room ){
    this._linkedRooms[direction] = Room;}

get description(){
    return this._description;
}
set name(value){
    if (value.length < 4){
        alert("Name is too short.");
        return;
    }
    this._name= value;}
    set description(value){
        if (value.length < 5) {
            alert("Description is too short");
            return;
        }
        this._description= value;
}
describe (){
    return "You have arrived at "+ this._name + " " + this._description;
}
move(direction){
    if (direction in this._linkedRooms){
        return this._linkedRooms[direction];
    }
    else{
        alert("you cant go that way");
        return this;
    }
    }
}

class Item  {
    constructor (name, description, location){
        this._name= name;
        this._description = description;
        this._location = location;
        
        
    }

    
  
        

    get name() {
        return this._name;
    }
    
    
    get description(){
    return this._description;
    }
    get location(){
        return this._location;
    }

    set name(value){
    if (value.length < 2){
        console.log("name is too short")
        return;
    }
    this.name = value;
    }
    set description(value) {
    if (value.length < 5) {
        alert("Description is too short");
        return;
    }
    this._description= value;
    }
    set location(value){
    
        this._location = value}
    
   described() {
    return("Congrats You have collected "+ this._name);
    
   }
}

const Gold = new Item("Gold", "add", "sink" )
const Silver = new Item("Silver", "add1", "sofa" )
const Copper = new Item("Copper", "add2","grass" )

function CollectItem(location){
    
   if (Item.location.includes (command)){
         itemBag.push(this.name);
        itemBag++;
          return itemBag;
              }
           else{
                alert("item not found");
              return this;
          }
           }





const start = new Room("start", "You are in a dark, cold place and you see a light to <b>north</b>\
and you hear the sound of running water to the <b>west</b>")
const house = new Room("White House", "You arrive to the lighthouse and walk up to the door. A strange old lady\
opens the door. What do you do?")
const jungle = new Room("Jungle ", " You see a river and there is a jungle to the <b>west</b>")
const bridge = new Room("bridge","You try to cross the bridge but a monster jumps out and bites your leg!",
"directions" )
start.linkedRoom("north", house);
start.linkedRoom("west", bridge);
house.linkedRoom("east", jungle);
house.linkedRoom("south", bridge);
bridge.linkedRoom("south", start)
console.log(start._linkedRooms)
console.log(Gold.described())



function display(room, item) {
    const textcontent = room.describe();
     // const total = item.described();
    document.getElementById("textarea").innerHTML = textcontent+ " you have collected "+itemBag  + "items" ;
    document.getElementById("userID").focus();
}

function startGame() {
    currentRoom = start;
    
    itemBag = 0;
    display(currentRoom, itemBag);
    

    document.addEventListener("keydown", function (event){
        if (event.key === "Enter"){
            const command = document.getElementById("userID").value.toLowerCase();
            const directions = ["north", "south", "east", "west"]
            const loc= ["sink", "sofa", "grass"]
            if(directions.includes(command)){
                currentRoom = currentRoom.move(command);
                display(currentRoom, itemBag);
                document.getElementById("userID").value = "";
            
            }else if (loc.includes(command)){
               
               itemBag++;
               if(itemBag === 3){
                   alert("congrats you found all the Items")
               }
                
                display(currentRoom, itemBag);
                document.getElementById("userID").value = "";

            }
            
            else{
                document.getElementById("userID").value = "";
                alert(" that is not a valid command")
            }
            
             
        }

    }
    )
    
}
startGame()

