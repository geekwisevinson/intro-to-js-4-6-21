import {data, Todo} from './data.js';
import thingsWeCanDo from './things-we-can-do.js';
import {actions} from './actions.js';

const header = thingsWeCanDo.createAnElement('h1');
thingsWeCanDo.putElementOnPage(header);
thingsWeCanDo.writeTextInElement(header, data.name);


const input = thingsWeCanDo.createAnElement('input');
thingsWeCanDo.putElementOnPage(input);

const button = thingsWeCanDo.createAnElement('button');
thingsWeCanDo.putElementOnPage(button);
thingsWeCanDo.writeTextInElement(button, 'Words');
thingsWeCanDo.addListener(button, 'click', function() {
    const value = thingsWeCanDo.getValueFromInput(input);
    data.todos.push(new Todo(value));
    console.log(data);
    actions.renderTodos(todoUl, data.todos);
    
});

const subHeader = thingsWeCanDo.createAnElement('h2');
thingsWeCanDo.putElementOnPage(subHeader);
thingsWeCanDo.writeTextInElement(subHeader, 'Todos');

const todoUl = thingsWeCanDo.createAnElement('ul');
thingsWeCanDo.putElementOnPage(todoUl);
