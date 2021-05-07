import thingsWeCanDo from './things-we-can-do.js';
import {data} from './data.js';

function renderTodos(ul, list) {
    ul.innerHTML = '';
    list.forEach( todo => {
        const li = thingsWeCanDo.createAnElement('li');
        thingsWeCanDo.putElementOnPage(li, ul);
        li.innerHTML = todo.text;
        thingsWeCanDo.addListener(li, 'click', function() {
           const index = data.todos.findIndex(item => item === todo);
            data.todos.splice(index, 1)
            renderTodos(ul, list);
        })
    });
    console.log(data);
}

export const actions = {
    renderTodos,
}