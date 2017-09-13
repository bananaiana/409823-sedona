var formButton = document.querySelector('.form-search');
var form = document.querySelector('.form');

formButton.addEventListener('click', function () {
    form.classList.toggle('active');
});