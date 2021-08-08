// variables
const btnOpen = document.querySelector('#btn-open');
const btnClose = document.querySelector('#btn-close');
const modal = document.querySelector('#modal');

btnOpen.addEventListener('click', () => {
    modal.classList.add('open-view');
});

btnClose.addEventListener('click', () => {
    modal.classList.remove('open-view');
});