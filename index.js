

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
    return "this is"+ this._name + "it has area of" + this._description;
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

// class Chracter{
//     constructor(name, description, conversation){
//         this._name = name;
//         this._description = description;
//         this._conversation = conversation;
//     }
//     get name(){
//         return this._name;
//     }
//     get description(){
//         return this._description;
//     }
//     get conversation(){
//         return this._conversation;
//     }
//     set name(value){
//         if (value.length < 4){
//             console.log("name is too short")
//             return;
//         }
//     }
//     set description() {
//         if (value.length < 5) {
//             alert("Description is too short");
//             return;
//         }
//         this._description= value;
//     }
//     set conversation(){
//         if (value.length < 5) {
//             alert("conversation is too short");
//             return;
//         }
//         this._conversation= value;
//     }
//     describe (){
//         return "this is"+ this._name + "it has area of" + this._description;
//     }
// }
class Item  {
    constructor (name, description, location){
        this._name= name;
        this._description = description;
        this._location = location;
        
        
    }

    
         CollectItem(location){
            let itemBag = [];
            if (location.includes (this.location)){
                 itemBag.push(this.name);
                 return itemBag;
                 }
             else{
                 alert("item not found");
               return this;
           }
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
    
describe() {
    return ("Congrats You have collected " + itemBag)
}
}
const Gold = new Item("Gold", "add", "sink" )
const Silver = new Item("Silver", "add1", "sofa" )
const Copper = new Item("Copper", "add2","grass" )




const Kitchen = new Room("cooking", "2m*2m")
const lounge = new Room("sitting", "3m*3m")
const garden = new Room("playing ", " front of house")
Kitchen.linkedRoom("south", lounge);
lounge.linkedRoom("north", Kitchen);
lounge.linkedRoom("east", garden)
console.log(Kitchen._linkedRooms)

//  Gold.linkedItem("sink", )
//  Silver.linkedItem("sofa", lounge)
//  Copper.linkedItem("grass", garden)


function display(room, item) {
    const textcontent = room.describe();
      const total = item.describe();
    document.getElementById("textarea").innerHTML = textcontent+ " you have collected " + total + "items";
    document.getElementById("userID").focus();
}

function startGame() {
    currentRoom = Kitchen;
    
    currentItem = 0;
    display(currentRoom, currentItem);
    

    document.addEventListener("keydown", function (event){
        if (event.key === "Enter"){
            const command = document.getElementById("userID").value.toLowerCase();
            const directions = ["north", "south", "east", "west"]
            const location= ["sink", "sofa", "grass"]
            if(directions.includes(command)){
                currentRoom = currentRoom.move(command);
                display(currentRoom, itemBag);
                document.getElementById("userID").value = "";
            
            }else if (location.includes(command)){
               itemBag = Gold.CollectItem(command);
                //itemBag.push(Item.name)
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



// console.log(Kitchen.name);
// console.log(Kitchen.description);
// console.log(Kitchen.describe());

// Kitchen.name = "lounge";
// console.log(Kitchen.name);

