export const data = {
    name: "Todo App",
    todos: [],
}


export class Todo {
    text = '';
    completed = false;
    constructor(value) {
        this.text = value;
        console.log('a todo was create');
    }
}