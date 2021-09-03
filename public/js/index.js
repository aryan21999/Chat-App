var friends = JSON.parse(localStorage.getItem("friends"))

var list = ''
console.log(list)

for (i = 0; i < friends.length; i++) {
    list += `<div class=row-8> 
    <button class="card" id="${i}" onclick="openClick(event)"  value="${friends[i]}">${friends[i]}</button><br>
    </div>`
}

document.getElementById('chatHeader').innerHTML = friends[0]
document.getElementById('friends').innerHTML = list

function openClick(e) {
    var i, card, chatcontent;
    card = document.getElementsByClassName("card");
    for (i = 0; i < card.length; i++) {
        card[i].className = card[i].className.replace(" active", "");
    }
    chatcontent = document.getElementsByClassName("chatcontent");
    for (i = 0; i < chatcontent.length; i++) {
      chatcontent[i].style.display = "none";
    }
    document.getElementById('chat').innerHTML = list

    e.currentTarget.className += " active";

    document.getElementById('chatHeader').innerHTML = e.currentTarget.getAttribute('value')
}



var chat = JSON.parse(localStorage.getItem('chat'))
var list = ''
console.log(list)

for (i=0; i< chat.length; i++)
{
    list += `<div class="chat" id="${i}"><p>${chat[i]}</p></div>`
}

var chat = [["Hlw bhai"],["hi"],["kya kr rhe"],["kuch nahi."]]

localStorage.setItem("chat", JSON.stringify(chat))





