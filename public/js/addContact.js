var friends = JSON.parse(localStorage.getItem("friends"))
if(friends ==  null){
    friends = []
}

function addContact(){
    friends.push(document.getElementById("name").value)
    localStorage.setItem("friends", JSON.stringify(friends))
    location.replace("/home/celticlab/Desktop/Whats-App/views/index.html")
}