import Restaurant from '../images/restaurant.jpg';
import '../css/about.css';

export default function about(content){
    
    const heroText = document.createElement('h1');
    heroText.classList.add('hero-text');
    heroText.textContent = 'About';

    const paraText = document.createElement('p');
    paraText.classList.add('para-text');
    paraText.textContent = `
     Our restaurant is established around 2023 with aim to provide authentic local indonesian cuisine taste which involve mixture of spice.
     Founder has immense respect and is fond of traditional curry based food from southeast asia particularly from indonesia.The taste is perfected through continual refining of spicing and braising process to serve the best authentic dishes.
     
     We will continually improve and refine our food tastes so that it matched customer taste and local preferences.
    `
    ;


    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');

    const imgElement = document.createElement('img');

    // Set the src attribute using the imported image
    imgElement.src = Restaurant;
    imgElement.setAttribute('alt', 'Restaurant Photo');

    imageContainer.appendChild(imgElement);
    
    
    
    content.appendChild(heroText);
    content.appendChild(paraText);
    content.appendChild(imageContainer);
    
    content.style.cssText = `
    background-color: brown;
    grid-area: maincontent;
    width: 100%;
    height: 100%;
    padding: 2em;
`;
}