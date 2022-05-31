/**
 * Activates section and menu item when they become in the view port
 * @param  {Boolean} useIntersectionObserver Using IntersectionObserver or getBoundingClientRect
 * @return {void}
 */
function activateInView(useIntersectionObserver) {
    // I will add a second way to performe this function using IntersectionObserver in comming version
    allSections.forEach((element) => {
        const top = element.getBoundingClientRect().top;
        const linkUrl = `#${element.id}`;
        const linkElem = document.querySelector(`[href="${linkUrl}"]`);

        if (top >= -119 && top <= 455) {            
            element.classList.add('your-active-class');
            //setMenuLink(linkUrl, true);

            if (linkElem !== null) {
                linkElem.classList.add('your__active__menu__link'); //crtMenuLink
            }
        } else {
            element.classList.remove('your-active-class');
            //setMenuLink(linkUrl, false);

            if (linkElem !== null) {
                linkElem.classList.remove('your__active__menu__link'); //crtMenuLink
            }
        }            
    });
}

/**
 * Activates and deactivates menu link
 * @param  {String} url link href
 * @param  {Boolean} activate Adding your__active__menu__link or remove it
 * @return {void}
 */
function setMenuLink(url, activate) {
    menuLinks.forEach((anc) => {
        if (url === anc.getAttribute('href')) {
            if (activate) {
                anc.classList.add('your__active__menu__link');
            } else {
                anc.classList.remove('your__active__menu__link');
            }            
        }            
    });
}