var session=document.querySelector("#user-session")
var logoutButton=document.querySelector("#logout")


session.innerHTML=`${
    JSON.parse(localStorage.getItem("currentuser"))
}`

logoutButton.addEventListener("click",function()
{
    window.location.href="index.html"
}
)