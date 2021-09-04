var friends = JSON.parse(localStorage.getItem("friends"))

var list = ''
console.log(list)

if(window[friends[0].split(" ").join("")] ==  null){
    window[friends[0].split(" ").join("")] = []
    chat(window[friends[0].split(" ").join("")])
}

for (i = 0; i < friends.length; i++) {
    list += `<button class="card" id="${i}" onclick="openClick(event)" value="${friends[i]}">${friends[i]}</button><br>`
}

document.getElementById('chatHeader').innerHTML = friends[0]
document.getElementById('friends').innerHTML = list

// chat(window[friends[0].split(" ").join("")])

function openClick(e) {
   var cards = document.getElementsByClassName("card");
   console.log(document.getElementsByClassName("card"))
    for (i = 0; i < cards.length; i++) {
        cards[i].className = cards[i].className.replace(" active", "");
    }
    e.currentTarget.className += " active";
    document.getElementById('chatHeader').innerHTML = e.currentTarget.getAttribute('value')
    console.log(e.currentTarget.getAttribute('value'))
    chat(window[e.currentTarget.getAttribute('value').split(" ").join("")])
}


var Aryan = [["Aryan", "Hii", 1212443], ["Aryan Gupta", "Hello", 1223435], ["Aryan ", "How are you", 1324355], ["Aryan Gupta", "I am good.", 1243545]]
var lucky = [["lucky", "hlw...", 1212443], ["Aryan Gupta", "Hii", 1223435], ["lucky", "How are you?..", 1324355], ["Aryan Gupta", "I am fine.", 1243545]]
var rahul = [["rahul", "Hesdsaedcwy", 1212443], ["Aryan Gupta", "Hii", 1223435], ["rahul", "How are you....", 1324355], ["Aryan Gupta", "I am feeling good.", 1243545]]

function chat(name) {
    var list = ''
    console.log(list)
    for (i=0; i < name.length; i++)
    {
        console.log(name[i][0]==localStorage.getItem("name"))
        // list += `<div class="chats" id="${i}"><h4>${name[i][1]}</h4></div>`
        if(name[i][0]==localStorage.getItem("name")){
            list += `<div class="chats col-md-3 offset-md-9 chat-bubble chat-bubble--right" id="${i}"><h4>${name[i][1]}</h4></div>`
        }
        else{
            list += `<div class="chats col-md-3 chat-bubble chat-bubble--left" id="${i}"><h4>${name[i][1]}</h4></div>`
        }
    }
    document.getElementById("chatBody").innerHTML = list
    console.log(document.getElementById("chatBody").innerHTML)
}
// function chatUser(){
//     var  friendChat = 
//     console.log(friendChat)
//     var Aryan = JSON.parse(localStorage.getItem("Aryan"))
//     if(Aryan ==  null){
//         Aryan = []
//     }
//     Aryan.push(["Avikal", document.getElementById("inbox").value, Date.now()])
//     localStorage.setItem("Aryan", JSON.stringify(Aryan))
// }
// document.getElementById("inbox").innerHTML = Aryan

// var Aryan = JSON.parse(localStorage.getItem('Aryan'))

localStorage.setItem("Aryan", JSON.stringify(Aryan))
localStorage.setItem("lucky", JSON.stringify(lucky))
// localStorage.setItem("rahul", JSON.stringify(rahul))
// localStorage.setItem("AryanGupta", JSON.stringify(AryanGupta))