var friends = JSON.parse(localStorage.getItem("friends"))

var list = ''
console.log(list)

for (i = 0; i < friends.length; i++) {
    console.log(friends[i])
    list += `<button class="card" id="${i}" onclick="openClick(event)"><h4>${friends[i]}</h4></button><br>`
}

function openClick(e) {
    var i, card;
    friends = document.getElementById("friends");
    card = document.getElementsByClassName("card");
    for (i = 0; i < card.length; i++) {
        card[i].className = card[i].className.replace(" active", "");
    }
    e.currentTarget.className += " active";
}
document.getElementById('friends').innerHTML = list
