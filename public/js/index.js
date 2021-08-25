var friends = JSON.parse(localStorage.getItem("friends"))

var list = ''
console.log(list)

for (i=0; i<friends.length;  i++)
{
    console.log(friends[i])
    list += `<div class="friends-list" id="${i}"><h4>${friends[i]}</h4></div>`
}


document.getElementById('friends').innerHTML = list