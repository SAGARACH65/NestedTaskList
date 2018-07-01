const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            console.log('he');
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false,
                    isInFocus: false,
                    children: action.children,
                    parent: action.parent,
                    indent:0
                }
            ];

        case 'ADD_FOCUS':
            return state.map(todo =>
                (todo.id === action.id)
                    ? {...todo, isInFocus: true}
                    : todo
            );
        case 'REMOVE_FOCUS':
            return state.map(todo =>
                (todo.id === action.id)
                    ? {...todo, isInFocus: false}
                    : todo
            );

        case 'TOGGLE_TODO':
            return state.map(todo =>
                (todo.id === action.id)
                    ? {...todo, completed: !todo.completed}
                    : todo
            );
        case 'CHANGE_TEXT':
            return state.map(todo =>
                (todo.id === action.id)
                    ? {...todo, text: action.text}
                    : todo
            );

        case 'REMOVE_TODO':
            return state.filter(todo => todo.id !== action.id);


        default:
            return state
    }
};

export default todos
