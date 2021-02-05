import $ from 'jquery';
import 'what-input';

// Foundation JS relies on a global variable. In ES6, all imports are hoisted
// to the top of the file so if we used `import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
window.jQuery = $;
require('foundation-sites');

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';


$(document).foundation();

let userMoney = document.querySelector('.js__user-money'),
    userButton = document.querySelector('.js__user-button'),
    pointsStep = 1,
    updateUserMoney;

localStorage.getItem('userMoney') === null ? userMoney.innerHTML = '0' : userMoney.innerHTML = localStorage.getItem('userMoney');

userButton.addEventListener('click', function(e){
    e.preventDefault();
    updateUserMoney = parseInt(userMoney.textContent);
    updateUserMoney = updateUserMoney + pointsStep;
    if(isNaN(updateUserMoney)){
        userMoney.innerHTML = updateUserMoney;
        localStorage.setItem('userMoney', updateUserMoney);
    }
    else{
        alert('Unknown Error!');
    }
});
