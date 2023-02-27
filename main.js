const form = document.querySelector('#todo-form');
const todo = document.querySelector('#todo');
const createButton = document.querySelector('#create-btn');
const view = document.querySelector('.user-todos');


const createTodo = (text) => {
    const slot = document.createElement('div');
    slot.className = 'items';
    slot.innerText = text.value;

    const cancelSlot = document.createElement('div');
    cancelSlot.className = 'cancel';

    slot.append(cancelSlot);
    view.append(slot);

}

const deleteTodo = () => {

}

form.addEventListener('submit', (e) => {
    if(!todo.value){
        return undefined;
    } else {
        e.preventDefault();
        createTodo(todo);
    }
})