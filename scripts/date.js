"use strict"

const option = {month: 'numeric', day: 'numeric', year: 'numeric'};
document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en-US', option);

const todaydate = new Date();
const year = todaydate.getFullYear();
document.getElementById('year').textContent = year

// Changes the detail of the Lesson 2 link in the HTML
const lesson_2 = document.querySelector("a");
lesson_2.textContent = "Design Principles"
lesson_2.href = "lesson_2/design-principles.html"

// Changes the detail of the Lesson 3 link in HTML
const lesson_3 = document.querySelector(".lesson_3")
lesson_3.textContent = "Website Planning Document"
lesson_3.href = "lesson_3/index.html"

const lesson_4 = document.querySelector(".lesson_4");
lesson_4.textContent = "Chambers Home page";
lesson_4.href = "lesson_4/index.html";

const lesson_5 = document.querySelector(".lesson_5");
lesson_5.href = "lesson_5/bom.html";
lesson_5.textContent = "Book of Mormon Game";

const lesson_6 = document.querySelector(".lesson_6");
lesson_6.href = "lesson_6/index.html";
lesson_6.textContent = "Updated site";

const lesson_7 = document.querySelector(".lesson_7");
lesson_7.textContent = "Progressive Image Loading";
lesson_7.href = "lesson_7/lazy_load.html";

const lesson7_2 = document.querySelector(".lesson_7_2");
lesson7_2.textContent = "Discover Page";
lesson7_2.href = "lesson_7_2/index.html";

const lesson_8 = document.querySelector(".lesson_8")
lesson_8.textContent = "Table Practice"
lesson_8.href = "lesson_8/table_build.html"

const lesson_8_2 = document.querySelector(".lesson_8_2")
lesson_8_2.textContent = "Join Form Page"
lesson_8_2.href = "lesson_8/join_page/join.html"

const lesson_9 = document.querySelector(".lesson_9")
lesson_9.textContent = "API practice"
lesson_9.href = "lesson_9/prophets.html"

const lesson_9_2 = document.querySelector(".lesson_9_2")
lesson_9_2.textContent = "Discover Page"
lesson_9_2.href = "lesson_9/directory/directory.html"

const lesson_10 = document.querySelector(".lesson_10")
lesson_10.textContent = "Weather API"
lesson_10.href = "lesson_10/weather-api.html"

const lesson_10_2 = document.querySelector(".lesson_10_2")
lesson_10_2.textContent = "Site with weather API"
lesson_10_2.href = "lesson_6/index.html"

const lesson_11 = document.querySelector(".lesson_11");
lesson_11.textContent = "Project Site Plan";
lesson_11.href = "project/planning/site-plan.html"

const project = document.querySelector(".final_project");
project.textContent = "Final Project";
project.href = "project/project/index.html";