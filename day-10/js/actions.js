import thingsWeCanDo from './things-we-can-do.js';
import {data} from './data.js';

function renderTodos(ul, list) {
    ul.innerHTML = '';
    list.forEach( todo => {
        const li = thingsWeCanDo.createAnElement('li');
        thingsWeCanDo.putElementOnPage(li, ul);
        li.innerHTML = todo.text;
        if (todo.completed) {
            thingsWeCanDo.addCSSClasses(li, 'completed')
        }
        thingsWeCanDo.addListener(li, 'click', function() {
        //    const index = data.todos.findIndex(item => item === todo);
        //     data.todos.splice(index, 1)
        todo.completed = !todo.completed;
            renderTodos(ul, list);
        });
        thingsWeCanDo.addListener(li, 'dblclick', function() {
               const index = data.todos.findIndex(item => item === todo);
                data.todos.splice(index, 1)
            // todo.completed = !todo.completed;
                renderTodos(ul, list);
        })
    });
    console.log(data);
    thingsWeCanDo.saveData();
}

export const actions = {
    renderTodos,
}