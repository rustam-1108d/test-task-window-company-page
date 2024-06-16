document.addEventListener('DOMContentLoaded', function () {
    const colorOptions = document.querySelectorAll('.color-option');

    colorOptions.forEach(option => {
        option.addEventListener('click', function () {
            colorOptions.forEach(opt => opt.classList.remove('selected'));
            option.classList.add('selected');
        });
    });
});
