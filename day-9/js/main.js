
import {registerHTML, loginHTML} from './html.js';
import actions from './actions.js';
import {createForm, createUsersList} from './forms.js';
import {elements} from './data.js'

createForm(
    'register',
    actions.actionRegister,
    registerHTML
);

createForm('login', actions.actionLogin, loginHTML);



createUsersList();


function createUserBanner() {
    const wrapper = document.createElement('div');
    document.body.prepend(wrapper);

    wrapper.innerHTML = `<h1> You are not logged in</h1>`;

    elements.banner = wrapper.querySelector('h1');
    console.log(elements)
}
createUserBanner();