import {signUp} from './fetch.js';

const input = document.createElement('input');
document.body.appendChild(input);

const button = document.createElement('button');
document.body.appendChild(button);
button.innerHTML = 'Sign up';


button.addEventListener('click', function() {
    console.log('working')

    signUp(input.value);
})

