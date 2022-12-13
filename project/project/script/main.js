// Hamburger Menu
const hamburger = document.querySelector(".button");
const navigation = document.querySelector(".container");
hamburger.addEventListener("click", ()=>{
    navigation.classList.toggle("open");
    hamburger.classList.toggle("rotate");
})



// Text animation
const textAnimation = new IntersectionObserver((items,observer)=>{
    items.forEach(item=>{
            item.target.classList.toggle("reposition", item.isIntersecting);
    })
},{
    threshold:.4,
})
const text = document.querySelector(".text");
textAnimation.observe(text)

const h2 = document.querySelectorAll(".heading");
h2.forEach(head=>{
    textAnimation.observe(head);
})

const para = document.querySelectorAll(".para");
para.forEach(pa=>{
    textAnimation.observe(pa);
})

const imagesAni = document.querySelectorAll(".image");
imagesAni.forEach(image=>{
    textAnimation.observe(image);
})

const fresh = document.querySelector(".drink")
textAnimation.observe(fresh);


// Header Change on Scroll
const heroImg = document.querySelector(".hero");
const mainNavigation = document.querySelector(".main-container")
const headerObserver = new IntersectionObserver((items)=>{
    items.forEach((item)=>{
        if(!item.isIntersecting){
            mainNavigation.classList.add("scroll");
        }else{
            mainNavigation.classList.remove("scroll");
        }
    })
}, {
    rootMargin: "-100px 0px 0px 0px",
})
headerObserver.observe(heroImg);



// Load Data From API
const url = "https://brotherblazzard.github.io/canvas-content/fruit.json";
let information = [];
let fruitName = [];
let nutritions = []
async function load(link){
    const name1 = await fetch(url);
    if(name1.ok){
        const converted = await name1.json();
        information = converted;

        information.forEach(fruit=>{
            fruitName = fruit.name;
        })

        information.forEach(info=>{
            nutritions = info.nutritions;
        })
    }
}
load(url);


// Weather API
const weatherUrl = "https://api.openweathermap.org/data/3.0/onecall?lat=33.158092&lon=-117.350594&exclude=minutely,hourly&units=metric&appid=15b3c845efce804c56e0ccf9cfedc22f"
let weatherInformation = [];

async function weatherDataFetch(url){
    const data = await fetch(url);
    if(data.ok){
        const converted = await data.json();
        weatherInformation = converted;
        console.log(weatherInformation);
    }
}

weatherDataFetch(weatherUrl);



// Lazy Load Images
const conversion = (image) => {
    image.setAttribute("src", image.getAttribute("data-src"))
    image.onload=()=>{
        image.removeAttribute("data-src");
    }
}

const imageObserver = new IntersectionObserver((items, observer)=>{
    items.forEach(item=>{
        if(item.isIntersecting){
            conversion(item.target);
            observer.unobserve(item.target);
        }
    })
},{
    threshold:.4,
});

const images = document.querySelectorAll(".image");
images.forEach(image=>{
    imageObserver.observe(image);
})