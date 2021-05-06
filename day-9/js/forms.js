import {elements} from './data.js';

export function createForm(name, callback, inputHTML) {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = `
    <style>
        input  {display: block;}
    </style>
    <h2>${name.toUpperCase()}</h2>
    <form name="${name}"  >
        ${inputHTML}
    </form>
    `;
    document.body.appendChild(wrapper);
    const form = wrapper.querySelector('form');
    console.log('form', form);
    form.addEventListener('submit', callback)
}

export function createUsersList(){
    const wrapper = document.createElement('div');

    wrapper.innerHTML = `
        <h2>Users List</h2>
        <ul></ul>
    `;

    document.body.appendChild(wrapper);
    const usersList = wrapper.querySelector('ul');
    elements.usersList = usersList
}
