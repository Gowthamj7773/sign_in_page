function reveal1(){
var password = document.getElementById("password")
var changeAnimation1 = document.getElementById("changeAnimation1")
if(password.type === "password")
{
    password.type = "text"
    changeAnimation1.style.backgroundImage = "url('eye_open.png')"
}
else{
    password.type = "password"
    changeAnimation1.style.backgroundImage = "url('eye_close.png')"
}
}

function reveal2(){
    var confirm_password = document.getElementById("confirm_password")
    var changeAnimation2 = document.getElementById("changeAnimation2")
    if(confirm_password.type === "password")
        {
            confirm_password.type = "text"
            changeAnimation2.style.backgroundImage = "url('eye_open.png')"
        }
        else{
            confirm_password.type = "password"
            changeAnimation2.style.backgroundImage = "url('eye_close.png')"
        }
}
function go()
{
    var password = document.getElementById("password")
    var confirm_password = document.getElementById("confirm_password")
    var email = document.getElementById("email")
    if(password.value=="" || confirm_password.value=="" || password.value=="")
    {alert("Please fill all boxes")}

    else{
    if(password.value == confirm_password.value)
    {
        alert("sign in successful")
    }
    else{
        alert("passwords did not matched")
    }
}
}