const imageObserver = new IntersectionObserver(items=>{
    items.forEach(item=>{
      item.target.classList.toggle("active",item.isIntersecting);
    })
},{
    threshold:.2,
})
const cards = document.querySelectorAll(".sectionMain");
cards.forEach(card=>{
    imageObserver.observe(card);
})

const grid = document.querySelector("#grid");
const list = document.querySelector("#list");

grid.addEventListener("click",()=>{
    document.querySelector(".body").classList.add("grid");
    document.querySelector(".body").classList.remove("list");
})
list.addEventListener("click",()=>{
    document.querySelector(".body").classList.remove("grid");
    document.querySelector(".body").classList.add("list");
})