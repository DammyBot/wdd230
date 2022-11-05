// New Hamburger
function toggleMenu(){
    document.getElementById("mainNavigation").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open")
}
const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu


// Last Modified
const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = lastModified

const current_year = document.getElementById("currentYear");
current_year.textContent = new Date().getFullYear();

const date = document.querySelector("#currentDateTime");
const newTime = new Date().toLocaleTimeString("en");
const newDate = new Date().toLocaleDateString("en");
date.textContent = `${newTime} ${newDate}`
// console.log(date)

const firstName = document.querySelector("#firstName").value;
const submitBtn = document.querySelector(".submitBtn");
submitBtn.addEventListener("click",()=>{
    let store = localStorage.getItem("firstName");
    store = firstName;
    localStorage.setItem("firstName",store)
})

const form = document.querySelector("#form");
const tile = document.querySelector("#title");