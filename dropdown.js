
const dropdowns = document.querySelectorAll('.dropdown');


dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu_item');
    const selected = dropdown.querySelector('.selected');

    select.addEventListener('click', () => {
        select.classList.toggle('select_clicked');

        caret.classList.toggle('caret_rotate');

        menu.classList.toggle('menu_open');
    });

    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerText = option.innerText;

            select.classList.remove('select_clicked');

            caret.classList.remove('caret_rotate');

            menu.classList.remove('menu_open');
            
            options.forEach(option => {
                option.classList.remove('active');
            });
        });
    });

});
