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


export const menu = () => {
    const menuBtn = document.querySelector('.menu__icon');
    const popupMenu = document.querySelector('.popup-menu');
    const popupContentMenu = document.querySelector('.popup-dialog-menu');
    const closeBtn = popupMenu.querySelector('.close-menu');


    menuBtn.addEventListener('click', () => {
        if(!popupContentMenu.style.transform) {
            popupContentMenu.style.transform = 'translate3d(0px, 0px, 0px)';
        }
    });


    closeBtn.addEventListener('click', () => popupContentMenu.style = '');
};