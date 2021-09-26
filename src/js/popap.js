// Модальные окна

// const click = document.querySelectorAll("click");
const body = document.getElementById('body');
const click = document.querySelectorAll("click");



document.querySelectorAll('.click').forEach(click => {
    click.addEventListener('click', event => {
        body.classList.toggle("lock")
    })
})