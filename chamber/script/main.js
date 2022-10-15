const fullDay = new Date();
const option = {weekday:"long", day:"numeric", month:"short", year:"numeric"};
document.getElementById("today").textContent = fullDay.toLocaleDateString("en-US", option);

document.getElementById("year").textContent = new Date().getFullYear();

const modified = document.lastModified
document.getElementById("lastModified").textContent = modified;