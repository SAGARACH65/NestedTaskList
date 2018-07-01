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
export const addFocus = id => ({
    type: 'ADD_FOCUS',
    id: id
});
export const removeFocus = id => ({
    type: 'REMOVE_FOCUS',
    id: id
});

export const setVisibility = filter => ({
    type: 'SET_VISIBILITY',
    filter:filter
});

export const Visibility = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};

