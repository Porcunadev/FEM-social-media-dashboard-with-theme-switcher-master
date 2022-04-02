const slider = document.querySelector("#slider");
const container = document.querySelector(".container");
slider.addEventListener('click',() => {
    if(slider.checked === true) {
        console.log('true');
        container.classList.add("light-bg");
        container.classList.remove("dark-bg")
    }
    if(slider.checked === false) {
        container.classList.add("dark-bg");
        container.classList.remove("light-bg")
    };
});

console.log(slider)