import '../css/contact.css'
import Location from '../images/location.png';

export default function contact(content){
    
    const contactText = document.createElement('h1');
    contactText.classList.add('contact-text');
    contactText.textContent = 'Contact';
    

    const addressPara = document.createElement('p');
    addressPara.classList.add('address-para');
    addressPara.textContent = 'Find us at Jl.unnamed road, rt 9 rw 10, Batam area around bengkong location after main road';


    const numberPara = document.createElement('p');
    numberPara.classList.add('number-para');
    numberPara.textContent = 'Any inquiry or booking you can call us at Telp: 0778 4231231 or our restaurant manager Cp Kel: 082123131231';


    const photoContainer = document.createElement('div');
    photoContainer.classList.add('photo-container');

    const imgLocation = document.createElement('img');

    // Set the src attribute using the imported image
    imgLocation.src = Location;
    imgLocation.setAttribute('alt', 'Location Photo');


    photoContainer.appendChild(imgLocation);
  

    
    content.appendChild(contactText);
    content.appendChild(addressPara);
    content.appendChild(photoContainer);
    content.appendChild(numberPara);
    
    
    content.style.cssText = `
    background-color: darkgray;
    grid-area: maincontent;
    width: 100%;
    height: 100%;
    padding: 2em;
`;
}