//! Переключение карточек
const countryButtons = document.querySelectorAll('.products__button');
const countryLists = document.querySelectorAll('.products-list');

countryButtons.forEach(button => {
    button.addEventListener('click', function () {
        const country = this.getAttribute('data-country');

        countryLists.forEach(list => {
            if (list.id === country) {
                list.style.display = 'grid';
            } else {
                list.style.display = 'none';
            }
        });


        // //! Проверяем наличие класса 'active-list'
        // const isActive = this.classList.contains('active-list');

        //! Удаляем класс 'active-list' у всех кнопок
        // countryButtons.forEach(btn => {
        //     btn.classList.remove('active-list');
        // });

        // //! Если кнопка не имеет класса 'active-list', добавляем его
        // if (!isActive) {
        //     this.classList.add('active-list');
        // }


        // Удаляем класс 'active-list' у всех кнопок
        countryButtons.forEach(btn => {
            btn.classList.remove('active-list');
        });

        // Добавляем класс 'active-list' только на текущую кнопку
        this.classList.toggle('active-list');
    });
});





//! Меню бургер
const burger = document.querySelector(".header-burger");
const menu = document.querySelector(".header__list");
burger.addEventListener("click", function () {
    burger.classList.toggle("active-burger");
    document.body.classList.toggle("disable-body");
    menu.classList.toggle("active-menu");
})


