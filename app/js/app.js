const slider = document.querySelector("#slider");
const mainDiv = document.querySelectorAll(".main-div");
const sectionDiv = document.querySelectorAll(".section-div");
const h1s = document.querySelectorAll("h1");
const tops = document.querySelectorAll(".top");
const bottom = document.querySelectorAll(".bottom");
const h2s = document.querySelectorAll("h2");
const body = document.querySelector("body");

slider.addEventListener('click',() => {
    if(slider.checked === true) {
        mainDiv.forEach(element => {
            element.classList.add("light-bg");
            element.classList.remove("dark-bg");
        });
        h1s.forEach(element => {
            element.classList.add("dark-text");
        }); 
        h2s.forEach(element => {
            element.classList.add("dark-text");
        }); 
        tops.forEach(element => {
            element.classList.add("light-bg");
            element.classList.remove("dark-bg");
        });
        bottom.forEach(element => {
            element.classList.add("light-bg");
            element.classList.remove("dark-bg");
        });
        body.classList.add("light-bg");
    }
    if(slider.checked === false) {
        mainDiv.forEach(element => {
            element.classList.add("dark-bg");
            element.classList.remove("light-bg")
            h1s.forEach(element => {
                element.classList.remove("dark-text");
            }); 
        });
        h1s.forEach(element => {
            element.classList.remove("dark-text");
        }); 
        tops.forEach(element => {
            element.classList.add("dark-bg");
            element.classList.remove("light-bg");
        });
        bottom.forEach(element => {
            element.classList.add("dark-bg");
            element.classList.remove("light-bg");
        });
        body.classList.add("darker-bg");
        h2s.forEach(element => {
            element.classList.remove("dark-text");
        });
    };
});
