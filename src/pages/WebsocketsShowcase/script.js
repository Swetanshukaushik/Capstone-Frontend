import { localhost } from '../../../urlConfig';

const socket = io(localhost);

socket.on("mesage from BE server", function(){
    console.log("I am connect to BE socket");
})

const addToListButton = document.querySelector('#add_to_list');
const inputItem = document.querySelector('input');
const listItems = document.querySelector('#unordered_list');
const createGroup = document.querySelector("#create_group");
const joinGroup = document.querySelector("#join_group");
const sendToGroup = document.querySelector("#send_to_group");

addToListButton.addEventListener('click',function () {
    let value = inputItem.value;
    if (value) {
        const liItem=document.createElement('li');
        liItem.textContent = value;
        listItems.appendChild(liItem);
        socket.io("add_to_list_message",value);
        inputItem.value="";
    }
});

createGroup.addEventListener('click', function (){
    console.log("create group req at fe");
    socket.emit('create_group', Math.random(0,1) * 1000);
});

joinGroup.addEventListener("click", function () {
    console.log("group join req at FE")
    socket.emit("join_room");
});

sendToGroup.addEventListener("click", function () {
    let value = inputItem.value;
    if (value) {
        socket.emit("group_message", value)
    }
});

// To recieve socket messages from BE
socket.on('item_message_from_BE', function(value) {
    const li = document.createElement('li');
    li.textContent = value;
    listItems.appendChild(li);
});

socket.on('serve_group_messages', function(value){
    console.log("Serving group message: ", value);
})