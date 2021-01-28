import menuData from './dataBases/menu.json';
import menuTemplate from "./templates/menu_card.hbs";
import './css/style.css';

// console.log(menuData);

const markupMenu= menuTemplate(menuData);

document
  .querySelector(".js-menu")
  .insertAdjacentHTML("beforeend", markupMenu);
 
  
const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};


// Если при загрузке страницы тема тёмная, не забудь поставить свойство checked у чекбокса
//  #theme -switch-toggle в true, чтобы ползунок сдвинулся в правильное положение.



function handleDefaultTheme() {
    document.body.classList.add(Theme.LIGHT);
};

let checkBox = document.querySelector('.theme-switch__toggle');
console.log(checkBox);
checkBox.addEventListener('change', changeTheme);

function changeTheme(event) {
    if (checkBox.checked) {
        document.body.classList.add(Theme.DARK);
        localStorage.setItem('theme', 'dark-theme');
    } else {
        document.body.classList.remove(Theme.DARK);
        document.body.classList.add(Theme.LIGHT);
       localStorage.setItem('theme','light-theme');
    }
};


let savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark-theme') {
    checkBox.checked = true;
    document.body.classList.add(Theme.DARK);
} else {
      document.body.classList.add(Theme.LIGHT);
};