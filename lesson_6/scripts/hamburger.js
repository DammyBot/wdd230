// Today's date
const today = new Date();
const options = {weekday:"long",day:"numeric",month:"long",year:"numeric"}
document.getElementById("current_date").textContent = today.toLocaleDateString("en-US", options)

// Last Modified
const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = lastModified

// Hamburger
function toggleMenu(){
    document.getElementById("mainNavigation").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open")
}
const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu

const current_year = document.getElementById("currentYear");
current_year.textContent = new Date().getFullYear();

const todaysDate = new Date();
const day = todaysDate.getDay();
const today1 = document.getElementById("todayDate");
// let day = 1;

if (day = "1"){
    today1.classList.toggle("on");
    today1.textContent = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
}else if (day = "2"){
    today1.classList.toggle("on")
    today1.textContent = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
} else{
    today1.textContent = "";
}