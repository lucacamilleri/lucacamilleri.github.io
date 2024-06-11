const cards = document.querySelectorAll('.card'); // Select all elements with class="card"
const columns = document.querySelectorAll('.column');
const rainbow = document.querySelector('.rainbow');

cards.forEach(card => {
    card.addEventListener("mouseover", function () {
        const image = card.querySelector('.image'); // Find the image within this card
        const header = card.querySelector('.header');
        const description = card.querySelector('.description');

        image.style.width = "40%";
        image.style.transition = "width 0.5s";

        header.style.fontSize = "40px";
        header.style.fontWeight = "600";
        header.style.transition = "font-size 0.33s, font-weight 0.33s"

        description.style.fontSize = "23px";
        description.style.transition = "font-size 0.33s"

        card.style.cursor = "pointer";
        card.style.backgroundColor = "rgb(60, 60, 60)";
        card.style.width = "60%";
        card.style.transition = "background-color 0.33s, width 0.5s";
    });
    card.addEventListener("mouseout", function () {
        const image = card.querySelector('.image'); // Find the image within this card
        const header = card.querySelector('.header');
        const description = card.querySelector('.description');

        image.style.width = "30%";
        image.style.transition = "width 0.5s";

        header.style.fontSize = "25px";
        header.style.fontWeight = "200";
        header.style.transition = "font-size 0.33s, font-weight 0.33s"
        
        description.style.fontSize = "15px";
        description.style.transition = "font-size 0.33s"

        card.style.cursor = "default";
        card.style.backgroundColor = "rgb(75, 75, 75)";
        card.style.width = "35%";
        card.style.transition = "background-color 0.33s, width 0.5s";
        
    });
    card.addEventListener("click", function () {
        location.href = "portfolio.html";
    });
});

columns.forEach(column => {
    column.addEventListener("mouseover", function () {
        const image = column.querySelector('.image'); // Find the image within this card
        const header = column.querySelector('.header');
        const description = column.querySelector('.description');

        image.style.width = "400px";
        image.style.transition = "width 0.5s";

        header.style.fontSize = "40px";
        header.style.fontWeight = "600";
        header.style.transition = "font-size 0.33s, font-weight 0.33s"

        description.style.fontSize = "25px";
        description.style.transition = "font-size 0.33s"

        column.style.cursor = "pointer";
        column.style.backgroundColor = "rgb(75, 75, 75)";
        column.style.transition = "background-color 0.33s, width 0.5s";
    });
    column.addEventListener("mouseout", function () {
        const image = column.querySelector('.image'); // Find the image within this card
        const header = column.querySelector('.header');
        const description = column.querySelector('.description');

        image.style.width = "350px";
        image.style.transition = "width 0.5s";

        header.style.fontSize = "30px";
        header.style.fontWeight = "200";
        header.style.transition = "font-size 0.33s, font-weight 0.33s"
        
        description.style.fontSize = "20px";
        description.style.transition = "font-size 0.33s"

        column.style.cursor = "default";
        column.style.backgroundColor = "rgb(51, 51, 51)";
        column.style.transition = "background-color 0.33s";
        
    });
    column.addEventListener("click", function () {
        location.href = "portfolio.html";
    });
});

const rainbowColors = ["orange", "purple", "red", "CadetBlue", "gold", "coral", "green", "cyan", "DeepPink", "DodgerBlue"];
let currentIndex = 0;