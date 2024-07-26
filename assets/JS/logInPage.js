var mail=document.querySelector("#signInEmail");
var pass=document.querySelector("#accPassword");
var loginButton=document.querySelector("#loginBtn")
var valid=document.querySelector("#not-valid")
var users;




function oldUser(email,pass){
    let flag=0
    let user=''
    for
    (var i=0 ; i<users.length ;i++ ){
        if
        (users[i].email==email && users[i].password==pass){
            flag=1
            user=users[i].name
            break
        }
    }
    if
    (flag!=0){
        valid.classList.add('d-none')
        localStorage.setItem("currentuser",JSON.stringify(users[i].name))
        window.location.href="mainPage.html"
    }
    else
    {
        valid.classList.remove('d-none')
    }
}

if
(localStorage.getItem('users')==null){
    users=[]
}
else
{
    users=JSON.parse(localStorage.getItem('users'))
}

loginButton.addEventListener("click",function()
{
    oldUser(mail.value,pass.value)
}
)
