const background = document.querySelector(".background")
const normalPara = document.querySelector(".normal")
const colored = document.querySelector(".colored")

const observerN = new IntersectionObserver(items=>{
    items.forEach(item=>{
        item.target.classList.toggle("open", item.isIntersecting)
    })
},{
    threshold:.3,
})

observerN.observe(background);
observerN.observe(normalPara);
observerN.observe(colored);