import {data} from './data.js';
function createAnElement(type) {
    return document.createElement(type);
}
function putElementOnPage(element, where) {
    if (where) {
        where.appendChild(element);
    } else {
        document.body.appendChild(element)
    }
}
function writeTextInElement(element, text) {
    element.innerHTML = text
}
function addListener(element, type, callback) {
    element.addEventListener(type, callback)
}

function getValueFromInput(input) {
    return input.value;
}

function saveData() {
    localStorage.setItem('todos', JSON.stringify(data.todos));
}

function getData() {
    return localStorage.getItem('todos');
}

function addCSSClasses(element, name) {
    element.classList.add(name)
}

function getRandomNumber(limit) {
    return Math.floor(Math.random() * limit);
}

export default {
    createAnElement,
    putElementOnPage,
    writeTextInElement,
    addListener,
    getValueFromInput,
    saveData,
    getData,
    addCSSClasses,
    getRandomNumber,
}