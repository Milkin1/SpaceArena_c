// Модальные окна

console.clear();
const popupText = document.querySelector('[data-btn-text_1]').nextElementSibling;
const popupImage = document.querySelector('[data-btn-image_1]').nextElementSibling;


const popupTextBtn = document.querySelector('[data-btn-text_1]');
const popupImageBtn = document.querySelector('[data-btn-image_1]');

const popupText = document.querySelector('.popup-text');
const popupImg = document.querySelector('.popup-image');

const popupTextCloseArea = document.querySelector('[data-popup-text]')
const popupImageCloseArea = document.querySelector('[data-popup-image]')

const popupCloseTextBtn = document.querySelector('[data-popup-text-x]');
const popupCloseImgBtn = document.querySelector('[data-popup-image-x]');

const lockBobyScroll = document.body;

popupTextBtn.addEventListener('click', function (e) {
    popupText.classList.add('open');
    lockBobyScroll.classList.add('lock');
});

popupImageBtn.addEventListener('click', function (e) {
    popupImage.classList.add('open');
    lockBobyScroll.classList.add('lock');
});

popupTextCloseArea.addEventListener('click', function (e) {
    popup.classList.remove('open');
    lockBobyScroll.classList.remove('lock');
});

popupCloseTextBtn.addEventListener('click', function (e) {
    popupText.classList.remove('open');
    lockBobyScroll.classList.remove('lock');
});

popupCloseImgBtn.addEventListener('click', function (e) {
    popupImg.classList.remove('open');
    lockBobyScroll.classList.remove('lock');
});