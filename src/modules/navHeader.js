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
    const popupContentTypes = document.querySelector('.popup-repair-types');


    menuBtn.addEventListener('click', () => {
        if(!popupContentMenu.style.transform) {
            popupContentMenu.style.transform = 'translate3d(0px, 0px, 0px)';
        }
    });


    popupMenu.addEventListener('click', (e) => {
        e.preventDefault();

        if(e.target.classList.contains('menu-link')) {
            const id = e.target.getAttribute('href').substring(1);
            const section = document.getElementById(id);
    
    
            if(section) {
                section.scrollIntoView({
                    block: "center", 
                    behavior: "smooth"
                });
            }
            
            popupContentMenu.style = '';
        }

        if(e.target.classList.contains('close-menu')) popupContentMenu.style = '';

        if(e.target.classList.contains('no-overflow')) {
            popupContentTypes.style.visibility = 'visible';
            popupContentMenu.style = '';
        }
    });


    popupContentTypes.addEventListener('click', (e) => {
        if(!e.target.closest('.popup-dialog-repair-types')) popupContentTypes.style.visibility = 'hidden';
    });
  
};