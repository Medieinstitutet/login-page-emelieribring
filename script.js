let meny = document.getElementById("meny");
let content = document.getElementById("content");

let inputUser = document.createElement("input");
inputUser.setAttribute("type", "text")
inputUser.setAttribute("id", "inputUser");

const labelUser = document.createElement("label");
labelUser.setAttribute("inputUser", "username");
labelUser.innerHTML = "Username:";
labelUser.setAttribute("id", "labelUser");


const labelPassword = document.createElement("label");
labelPassword.setAttribute("inputPassword", "password");
labelPassword.innerHTML = "Password:";
labelPassword.setAttribute("id", "labelPassword");

meny.appendChild(labelUser);
meny.appendChild(labelPassword);

let inputPassword = document.createElement("input");
inputPassword.setAttribute("id", "inputPassword");
inputPassword.setAttribute("type", "text");
let logInButton = document.createElement("button");
logInButton.id = "logInButton";
let buttonText = document.createTextNode("Log In");
logInButton.appendChild(buttonText);


meny.appendChild(inputUser);
meny.appendChild(inputPassword);
meny.appendChild(logInButton);

let myMessage = document.getElementById(message);

let logOutButton = document.createElement("button");
logOutButton.id = "logOutButton";
let logoutbuttonText = document.createTextNode("Log Out");
logOutButton.appendChild(logoutbuttonText);

function title(){
let title = document.createElement("h1");
let titleText = document.createTextNode("Super awesome login website !!");
title.appendChild(titleText);
content.appendChild(title);
}


startside();

function startside(){
    if (localStorage.getItem("username")){
        welcomeLogIn();
    } else {
        welcome();
    }
}

function welcome(){

    title();
    message.innerHTML = "Welcome! You should log in!"

}


function notInlogged(){

    message.innerHTML = "You logged out!";
    meny.removeChild(logOutButton);
    meny.appendChild(inputUser);
    meny.appendChild(inputPassword);
    meny.appendChild(logInButton);
    meny.appendChild(labelUser);
    meny.appendChild(labelPassword);
}



logInButton.addEventListener("click", ()=>{

    logIn();

})



function logIn (){

    let username = inputUser.value;
    let password = inputPassword.value;

    // localStorage.getItem("username");
    // localStorage.getItem("password");

    console.log("login", username, password) 

    for(i = 0; i < objPeople.length; i++){
        if (username === objPeople[i].username && password === objPeople[i].password){
            console.log("user logged in");
            message.innerHTML= (username + " is logged in!");
            let inlogged = localStorage.setItem("username", username);
            console.log(username + "logged in!");
            welcomeLogIn(); 
            return;
        }
    }
    console.log("user failed to log in");
    message.innerHTML="Username or password is wrong. Please try again.";
}


function welcomeLogIn(){
    meny.removeChild(labelUser);
    meny.removeChild(labelPassword);
    meny.removeChild(inputUser);
    meny.removeChild(inputPassword);
    meny.removeChild(logInButton);
    let username = inputUser.value;
    console.log("welcomelogin");
    message.innerHTML = localStorage.getItem("username") + " is logged in!";
    meny.appendChild(logOutButton);
    logOutBtn();
}



function logOutBtn (){
    console.log("show logout button");
    logOutButton.addEventListener("click", () =>{
    console.log("log out");
    localStorage.removeItem("username");
    notInlogged();
})
}

const objPeople = [

    {
        username: "janne", 
        password: "test"
    },

    {
        username: "emelie",
        password: "lala"
    },

    {
        username: "rolf",
        password: "lolo"
    }

]
