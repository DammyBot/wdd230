let dataInformation = document.querySelectorAll("img[data-src]");

const converted = (image) => {
    image.setAttribute("src", image.getAttribute("data-src"))
    image.onload = () => {
        image.removeAttribute("data-src");
    }
}

if("IntersectionObserver" in window){
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if (item.isIntersecting){
                converted(item.target);
                observer.unobserve(item.target)
        }})
    })
    dataInformation.forEach((item)=>{
        observer.observe(item)
    })
}else{
    dataInformation.forEach((image) => {
        conversion(image);
    })
}

// initialize display elements
const todayDisplay = document.querySelector(".today");
const visitsDisplay = document.querySelector("#visit");

// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));

// determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `1`;
}

// increment the number of visits.
numVisits++;
// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);
// show todays date.
todayDisplay.textContent = Date.now();
