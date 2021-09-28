// Модальные окна

// const click = document.querySelectorAll("click");
// const body = document.getElementById('body');
// const clicks = document.querySelectorAll("click");
const closeBtns = document.querySelectorAll('[data-close]');
const openBtns = document.querySelectorAll('[data-open]');
const popup = document.querySelectorAll('.popup');

console.log(popup);
for (let closeBtn of closeBtns) {
    closeBtn.addEventListener('click', function () {
        popup.classList.remove("open");
    })
}

for (let openBtn of openBtns) {
    openBtn.addEventListener('click', function (e) {
        popup.classList.add("open");
    })
}



// clicks.forEach(click => {
//     click.addEventListener('click', event => {
//         body.classList.add("lock")
//     })
// })