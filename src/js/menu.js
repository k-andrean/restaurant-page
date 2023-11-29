import foods from '../json/menu.json';
import rendang from '../images/rendang.jpg';
import '../css/menu.css';

export default function menu(content){

    const myFood = new Image();
    myFood.src = rendang;
    
    const menuBox = document.createElement('div');
    menuBox.classList.add('menu-box');
    

    const topText = document.createElement('div');
    topText.classList.add('top-text');
    topText.textContent = 'Menu' 

    const menuContent = document.createElement('div');
    menuContent.classList.add('menu-content');


    foods.forEach(food => {
        // Create elements for each food item
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
      
        const foodName = document.createElement('h2');
        foodName.innerHTML = `<b>${food.name}</b>`;
      
        const foodPrice = document.createElement('span');
        foodPrice.classList.add('price-tag');
        foodPrice.textContent = food.price;
      
        const foodDescription = document.createElement('p');
        foodDescription.textContent = food.description;
      
        // Append elements to the container
        menuItem.appendChild(foodName);
        menuItem.appendChild(foodPrice);
        

        menuContent.appendChild(menuItem);
        menuContent.appendChild(foodDescription);
    }); 

    menuBox.appendChild(topText);
    menuBox.appendChild(menuContent);


    content.appendChild(menuBox);
    
    
    content.style.cssText = `
    background-image: url(${myFood.src});
    background-size: cover; 
    background-position: center center; 
    display: flex;
    align-items: center;
    justify-content: center;
    grid-area: maincontent;
    width: 100%;
    height: 100%;
`;
}