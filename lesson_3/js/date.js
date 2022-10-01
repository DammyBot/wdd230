const option_1 = {year:"numeric"};
const option_2 = {day:"numeric", month:"long", year:"numeric"};
document.getElementById("year").textContent = new Date().toLocaleDateString("en-US", option_1);
document.getElementById("date_and_time").textContent = new Date().toLocaleDateString("en-US", option_2);