// Модальные окна

// const click = document.querySelectorAll("click");
const body = document.getElementById('body');
const clicks = document.querySelectorAll("click");



clicks.forEach(click => {
    click.addEventListener('click', event => {
        body.classList.add("lock")
    })
})