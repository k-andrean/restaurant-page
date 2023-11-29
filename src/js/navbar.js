export default function navbar(){
    const element = document.createElement('div')

    element.classList.add('navbar')

    const arrayChoice = ['Home', 'About', 'Menu', 'Contact']

    for (let i = 0; i < arrayChoice.length; i++){
        const linkElement = document.createElement('a')

        linkElement.classList.add('link-button');
        linkElement.href = arrayChoice[i].toLowerCase();
        linkElement.textContent = arrayChoice[i]
        linkElement.style.cssText = 'margin-left: 1rem; color: white; text-decoration: none;'

        element.appendChild(linkElement);
    }

    element.style.cssText = 'display:flex; align-items: center; justify-content: flex-start; background-color: red; grid-area: navbar; min-height: 100%; position: sticky; top: 0; z-index: 1000;';

    return element;
}