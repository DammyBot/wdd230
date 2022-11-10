const url =
  "https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json";
let information = [];

async function getProphets(url) {
  const data = await fetch(url);
  if (data.ok) {
    const converted = await data.json();
    information = converted.prophets;
    // console.log(information);
    outputData(information);
  }
}

function outputData(array){
    const mainContainer = document.querySelector("#cards");
    array.forEach(data=>{

        const order = data.order
        let nth = ""
        if(order == "1"){
            nth="st"
        }else if(order == "2"){
            nth="nd"
        }else if(order == "3"){
            nth="rd"
        }else{
            nth="th"
        }

        const container = document.createElement("div");
        container.setAttribute("class","body");

        const fullName = document.createElement("h3");
        fullName.textContent = `${data.name} ${data.lastname}`

        const birthDate = document.createElement("p");
        birthDate.textContent = `Date of birth: ${data.birthdate}`

        const birthPlace = document.createElement("p");
        birthPlace.textContent = `Place of Birth: ${data.birthplace}`

        const image = document.createElement("img");
        image.setAttribute("src", data.imageurl);
        image.setAttribute("alt",`Potrait of ${fullName.textContent} - ${order}${nth} Latter-day President`);
        image.setAttribute("loading","lazy")

        container.appendChild(fullName);
        container.appendChild(birthDate);
        container.appendChild(birthPlace);
        container.appendChild(image);

        mainContainer.appendChild(container);
    })
}

getProphets(url);