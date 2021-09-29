// Модальные окна

console.clear();
const popupText = document.querySelector('.popup-text');
const popupImage = document.querySelector('.popup-image');

const popupTextBtn = document.querySelector('[data-btn-text]');
const popupImageBtn = document.querySelector('[data-btn-image]');

const popupTextCloseBtn = document.querySelector('[data-popup-text]')
const popupImageCloseBtn = document.querySelector('[data-popup-image]')

const popupTextCloseBtnX = document.querySelector('[data-popup-text-x]')
const popupImageCloseBtnX = document.querySelector('[data-popup-image-x]')

const lockBobyScroll = document.body

popupTextBtn.addEventListener('click', function (e) {
    popupText.classList.add('open');
    lockBobyScroll.classList.add('lock');
})
popupImageBtn.addEventListener('click', function (e) {
    popupImage.classList.add('open');
    lockBobyScroll.classList.add('lock');
})
popupTextCloseBtn.addEventListener('click', function (e) {
    popupText.classList.remove('open');
    lockBobyScroll.classList.remove('lock');
})
popupImageCloseBtn.addEventListener('click', function (e) {
    popupImage.classList.remove('open');
    lockBobyScroll.classList.remove('lock');
})
popupTextCloseBtnX.addEventListener('click', function (e) {
    popupText.classList.remove('open');
    lockBobyScroll.classList.remove('lock');
})
popupImageCloseBtnX.addEventListener('click', function (e) {
    popupImage.classList.remove('open');
    lockBobyScroll.classList.remove('lock');
})