// To update to the present year
document.getElementById("current_year").textContent = new Date().getFullYear()

// To update to the present date in month, day and year
const option = {month: 'numeric', day: 'numeric', year: 'numeric'}
document.getElementById("updated_date_and_time").textContent = new Date().toLocaleDateString("en-US", option)