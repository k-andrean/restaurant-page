import Food from '../images/food.jpg';
import '../css/home.css';

export default function home(content){

    const myFood = new Image();
    myFood.src = Food;

    const foodText = document.createElement('p');
    foodText.classList.add('food-text');
    foodText.textContent = 'Rendang Resto';

    const smallText = document.createElement('p');
    smallText.classList.add('small-text');
    smallText.textContent = 'Indonesian local style cuisine restaurant'


    content.appendChild(foodText);
    content.appendChild(smallText);

    content.style.cssText = `
        background-image: url(${myFood.src});
        background-size: cover; 
        background-position: center center; 
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        grid-area: maincontent;
        width: 100%;
        height: 100%;
    `;

}