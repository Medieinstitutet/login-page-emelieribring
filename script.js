let meny = document.getElementById("meny");
let content = document.getElementById("content");


let createNew = document.getElementById("createnew");
let newUserBtn = document.createElement("button");
newUserBtn.setAttribute("id", "newuserbtn");
let newUserBtnText = document.createTextNode("New member? ")


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

let title = document.createElement("h1");
let titleText = document.createTextNode("Super awesome login website !!");
title.appendChild(titleText);
content.appendChild(title);



startside();

function startside(){
    if (localStorage.getItem("username")){
        welcomeLogIn();
    } else {
        welcome();
    }
}

function welcome(){

    content.appendChild(title);
    message.innerHTML = "Welcome! You should log in!"
    meny.appendChild(inputUser);
    meny.appendChild(inputPassword);
    meny.appendChild(logInButton);
    meny.appendChild(labelUser);
    meny.appendChild(labelPassword);
    createNew.appendChild(newUserBtn);

}


logInButton.addEventListener("click", ()=>{

    logIn();

})



function logIn (){

    let username = inputUser.value;
    let password = inputPassword.value;

    console.log("login", username, password) 

    let lsobject = JSON.parse(localStorage.getItem("objPeople"));

    for(i = 0; i < lsobject.length; i++){
        if (username === lsobject[i].username && password === lsobject[i].password){
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
    logOutButton.remove(logOutButton);
    welcome();
})
}


if(!localStorage.getItem("objPeople")){
    let objPeople = [

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
    localStorage.setItem("objPeople", JSON.stringify(objPeople));
}


// ------------------------------------------------------------------------------------------------------------
// --------------------------------------------CREATE NEW USER-------------------------------------------------
// ------------------------------------------------------------------------------------------------------------

newUserBtn.appendChild(newUserBtnText);
createNew.appendChild(newUserBtn)

newUserBtn.addEventListener("click", ()=>{

    createNew.removeChild(newUserBtn);
    creatediv.appendChild(labelNewUser);
    creatediv.appendChild(createuser);
    creatediv.appendChild(labelNewPassword);
    creatediv.appendChild(createpassword);
    creatediv.appendChild(createbutton); 
});


let createuser = document.createElement("input");
createuser.setAttribute("type", "text");
createuser.setAttribute("id", "createuser")
let createpassword = document.createElement("input");   
createpassword.setAttribute("type", "text");
createpassword.id = "createpassword";
let createbutton = document.createElement("button");
let buttoncreateText = document.createTextNode("Become member!")
createbutton.appendChild(buttoncreateText);
let creatediv = document.getElementById("create");

const labelNewUser = document.createElement("label");
labelNewUser.setAttribute("inputUser", "username");
labelNewUser.innerHTML = "New username:";
labelNewUser.setAttribute("id", "labelNewUser");

const labelNewPassword = document.createElement("label");
labelNewPassword.setAttribute("inputPassword", "password");
labelNewPassword.innerHTML = "New password:";
labelNewPassword.setAttribute("id", "labelNewPassword");

createbutton.addEventListener("click", ()=>{

    let saveObjPeople = JSON.parse(localStorage.getItem("objPeople"));

    let newUser = {
        id: saveObjPeople.length + 1,
        username: createuser.value,
        password: createpassword.value,
    };

    saveObjPeople.push('newUser', newUser)
    localStorage.setItem("objPeople", JSON.stringify(saveObjPeople));
    console.log('new user pushed');
    message.innerHTML = "You made a new account! Try log in!";
    creatediv.removeChild(labelNewUser);
    creatediv.removeChild(labelNewPassword);
    creatediv.removeChild(createuser);
    creatediv.removeChild(createpassword);
    creatediv.removeChild(createbutton); 

});

