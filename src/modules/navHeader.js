export const accordionTel = () => {
    const arrBtn = document.querySelector('.header-contacts__arrow');
    const accordNumber = document.querySelector('.accord-number');

    arrBtn.addEventListener('click', () => {
        if(!arrBtn.style.cssText) {
            arrBtn.style.transform = 'rotate(-180deg) translateX(-5px)';
            accordNumber.style.cssText = 'margin-top: 25px; opacity: 1';
        } else {
            arrBtn.style.transform = '';
            accordNumber.style.cssText = '';
        }
    });

};