document.addEventListener('DOMContentLoaded', function () {
    var modifierMode = document.querySelector('.modifier-mode');

    modifierMode.addEventListener('click', function () {
        document.body.classList.toggle('dark');
    });
});
