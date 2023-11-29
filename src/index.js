import navbar from './js/navbar.js';
import home from './js/home.js';
import menu from './js/menu.js';
import about from './js/about.js';
import contact from './js/contact.js';
import './css/index.css';

const arraySwitch = {
    'home' : home,
    'menu' : menu,
    'about' : about,
    'contact' : contact
};

let currentTab;

function component() {
    
    const content = document.getElementById('content');
    
    const navbarElement = navbar();
    console.log(navbarElement);
    const mainContent = document.createElement('div');
    mainContent.classList.add('main-content');
    

    content.appendChild(navbarElement);
    
    arraySwitch['home'](mainContent);
    currentTab = 'home';

    
    const linkButtons = navbarElement.querySelectorAll('.link-button');


    linkButtons.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
    
            // Get the textContent of the clicked link
            const functionText = event.target.textContent.toLowerCase();

            if (functionText in arraySwitch) {
                // Check if the currentTab is different from functionText
                if (currentTab !== functionText) {
                    // Call the corresponding function and update the tab display
                    mainContent.innerHTML = '';
                    arraySwitch[functionText](mainContent);
                    currentTab = functionText; // Update currentTab
                } else {
                    // Continue with other logic without changing tab display
                    console.log('Function not found');
                }
            } else {
                console.log('Function not found');
            }
        
        });
    });

    
    content.appendChild(mainContent);

    content.style.cssText = `
    box-sizing: border-box;
    min-height: 100vh;
    display: grid;
    grid-template-rows: 1fr 6fr;
    grid-template-columns: 7fr;
    grid-template-areas:
        "navbar"
        "maincontent"
    ; 
    align-items: center;
    justify-content: center;
`;  


    return content;
  }

  
document.body.appendChild(component());