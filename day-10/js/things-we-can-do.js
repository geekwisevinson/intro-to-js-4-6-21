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

export default {
    createAnElement,
    putElementOnPage,
    writeTextInElement,
    addListener,
    getValueFromInput,
}