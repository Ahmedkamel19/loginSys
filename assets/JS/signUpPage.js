var userName=document.querySelector("#userName");
var email=document.querySelector("#email");
var pass=document.querySelector("#pass");
var signupButton=document.querySelector("#signup")
var userNameValidation=document.querySelector('#userNameValidation');
var emailValidation=document.querySelector('#emailValidation');
var passValidatation=document.querySelector('#passValidation');
var newUser=document.querySelector('#newUser');
var alreadyUser=document.querySelector('#alreadyUser');



if
(localStorage.getItem('users') == null){
    neWusers = []
}
else
{
    var neWusers=JSON.parse(localStorage.getItem('users'));
}

function signUp(){
    validteFields()
    if
    (isValid())
    {var user={
            name:userName.value,
            email:email.value,
            password:pass.value
        }
        if
        (userExistsOrNot(user.email,user.name)){
            alreadyUser.classList.remove("d-none")
        }
        else
        {
            neWusers.push(user)
            localStorage.setItem("users",JSON.stringify(neWusers))

            newUser.classList.remove("d-none")
            alreadyUser.classList.add("d-none")
            setTimeout(()=>{window.location.href="index.html"},3000)
         }
    }
    else
    {
        newUser.classList.add("d-none")
    }
}
function isValid(){
    return (/^[A-Z][a-zA-Z '.-]*[A-Za-z][^-]$/.test(userName.value)
    &&
    /[\w.]+@[\w]+\.[a-zA-Z]/.test(email.value)
    &&
    /^[A-Z]+[a-z]+[\d]+$/.test(pass.value))
}
function validteFields(){
    if
    (/^[A-Z][a-zA-Z '.-]*[A-Za-z][^-]$/.test(userName.value)){
        userNameValidation.classList.add("d-none")
    }
    else
    {
        userNameValidation.classList.remove("d-none")
    }
    if
    (/[\w.]+@[\w]+\.[a-zA-Z]/.test(email.value)){
        emailValidation.classList.add("d-none")
    }
    else
    {
        emailValidation.classList.remove("d-none")
    }
    if
    (/^[A-Z]+[a-z]+[\d]+$/.test(pass.value)){
        passValidatation.classList.add("d-none")
    }
    else
    {
        passValidatation.classList.remove("d-none")
    }
}


function userExistsOrNot(email,name){
    flag=0
    for(var i=0 ; i<neWusers.length ;i++ ){
        if
        (neWusers[i].email==email && neWusers[i].name==name){
            flag=1
        }
    }
    if
    (flag!=0)
    {
        return true
    }
    else
    {
        return false
    }
}


signupButton.addEventListener("click",signUp)


