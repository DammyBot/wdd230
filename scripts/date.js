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
lesson_5.href = "lesspn_5/bom.html";
lesson_5.textContent = "Book of Mormomn Game";