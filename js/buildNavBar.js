/**
 * Build navigation menu
 * @param  {String} type1 Type of get Elements ('getElementsByTagName', 'querySelectorAll')
 * @param  {String} type2 Type of array converting ('Array.from', 'spreadOperator')
 * @param  {String} type3 Type of adding list items ('appendChild', 'innerHTML')
 * @param  {Boolean} useFragment Using Document Fragment
 * @return {void}
 */

function buildNavBar(type1, type2, type3, useFragment) {
    let fragment = document.createDocumentFragment();
    let menu = [...document.getElementsByClassName('navbar__menu')][0];

    if (type1 === 'getElementsByTagName') {
        allSections = document.getElementsByTagName('section');
    } else {
        allSections = document.querySelectorAll('section');
    }

    if (type2 === 'Array.from') {
        allSections = Array.from(allSections);
    } else {
        allSections = [...allSections];
    }
    
    allSections.forEach((element) => {
        const linkUrl = `#${element.id}`;
        const linkText = element.dataset.nav; // element.getAttribute('data-nav')

        let listItem = document.createElement('li');

        if (type3 === 'appendChild') {
            let itemLink = document.createElement('a');
            itemLink.classList.add('menu__link');
            itemLink.textContent = linkText;
            itemLink.setAttribute('href', linkUrl); // itemLink.href = linkUrl
            itemLink.addEventListener('click', handleItemLinkClickEvent);
            listItem.appendChild(itemLink);    
        } else {
            listItem.innerHTML = `<a class='menu__link' href='${linkUrl}'>${linkText}</a>`;
            listItem.childNodes[0].addEventListener('click', handleItemLinkClickEvent);
        }

        if (useFragment) {            
            fragment.appendChild(listItem);
        } else {
            menu.appendChild(listItem);
        }        
    });

    if (useFragment) {
        menu.appendChild(fragment);
    }
}

function handleItemLinkClickEvent(event) {
    event.preventDefault();
    const selectedSection = document.getElementById(event.path[0].getAttribute('href').replace('#', '')); // .href | getAttribute('href')
    //const selectedSection = document.getElementById(event.path[0].getAttribute('href').substring(1));
    selectedSection.scrollIntoView({behavior: "smooth", block: "center"});
}