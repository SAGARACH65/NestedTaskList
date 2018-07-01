let nextTodoId = 0;
export const addTodo = text => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text: text
});


export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id: id
});
export const changeText = (id,text) => ({
    type: 'CHANGE_TEXT',
    id: id,
    text:text
});
export const removeTodo = id => ({
    type: 'REMOVE_TODO',
    id: id
});


