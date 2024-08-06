
let Title = document.getElementById("Title");
let field = document.getElementById("field");
let signup = document.getElementById("signup");
let login = document.getElementById("login");

login.onclick = function(){
    field.style.maxHeight = 0;
    Title.innerHTML = "Log in";
    signup.classList.add("disable");
    login.classList.remove("disable")
}

signup.onclick = function(){
    field.style.maxHeight = "60px";
    Title.innerHTML = "Sign Up";
    signup.classList.remove("disable");
    login.classList.add("disable")
}