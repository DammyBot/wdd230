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