/*
* @description Change style of the 'Item List'
* @param {string} caption
* @returns (void)
*/
function selectMenuItem(caption) {
    let current = 0;
    for (let i = 0; i < document.links.length; i++) {
        if (document.links[i].innerText === caption) {
            current = i;            
            if (!document.links[current].classList.contains('menu__link__selected')) {
                document.links[current].classList.add('menu__link__selected');        
            }    
        } else {            
            if (document.links[i].classList.contains('menu__link__selected')) {
                document.links[i].classList.remove('menu__link__selected');
            }        
        }
    }
}