const form = document.querySelector('#todo-form');
const todo = document.querySelector('#todo');
const createButton = document.querySelector('#create-btn');
const view = document.querySelector('.user-todos');
const deleteAll = document.querySelector('#delete');


const createTodo = (text) => {
    const slot = document.createElement('div');
    slot.className = 'items';
    slot.innerText = text.value;

    const cancelSlot = document.createElement('div');
    cancelSlot.className = 'cancel';
    
    const xImage = document.createElement('img');
    xImage.src = '/cancel.png';
    xImage.style.width = '40px';
    xImage.style.height = '40px';

    xImage.addEventListener('mouseover', () => {
        
    })

    cancelSlot.addEventListener('click', () => {
        deleteTodo(slot);
    })

    cancelSlot.addEventListener('mouseover', () => {
        xImage.classList.toggle('lge');
    })

    slot.append(cancelSlot);
    view.append(slot);
    cancelSlot.append(xImage);

    deleteAll.addEventListener('click', () => {
        for(item of view.children) {
            if(item.classList.contains('items')) {
                deleteTodo(item);
            }
        }
    })

}

const deleteTodo = (todo) => {
    todo.remove();
}

form.addEventListener('submit', (e) => {
    if(!todo.value){
        return undefined;
    } else {
        e.preventDefault();
        createTodo(todo);
    }
})