function login() {
    localStorage.setItem("name", document.getElementById("name").value)
    console.log(document.getElementById("name").value)
    location.replace("/home/celticlab/Desktop/Whats-App/views/index.html")
}

//     var text = new Text({
//         name: name
//     })
//     if (name === '') {
//         alert('input some message');
//         return false;
//         } else{
//             text = inputValue;
//         }
//     // .then(function (response) {
//     //     if (response) {
//     //     return response;
//     //     }
//     // })
//     // .catch(function (error) {
//     //     console.log(error);
//     // });
// }


// login()