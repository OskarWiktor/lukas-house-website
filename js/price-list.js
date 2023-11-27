const buttons = document.querySelectorAll('.price-list--service__button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('active')
        let showPriceList = button.closest('.price-list--service').querySelector('.service--expand__wrapper');
        showPriceList.classList.toggle('active')
    })
})