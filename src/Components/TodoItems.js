import React, {Component} from 'react';
import AddTodo from './AddTodo';
import {connect} from 'react-redux';
import {Visibility} from "../Actions";
import {store} from '../Store'

class TodoItems extends Component {


    render() {
      
        const Todos = this.props.todos.map(todo =>
            <AddTodo text={todo.text} checked={todo.completed} keys={todo.id}/>
        );
        return (
            <div>
                {Todos}
            </div>

        );
    }
}

const getVisibleTodos = (todos, filter) => {
    console.log(todos.checked);
    switch ((filter.visibility)) {

        case Visibility.SHOW_ALL:
            console.log(todos);
            return todos;
        case Visibility.SHOW_COMPLETED:
            console.log(todos);
            return todos.filter(t => t.completed);
        case Visibility.SHOW_ACTIVE:
            console.log(todos);
            return todos.filter(t => !t.completed);
        default:
            //added just for debugging
            return todos;
    }
};

// const mapStateToProps = state => ({
//    todos:state.todos
// });
const mapStateToProps = state => ({

    todos: getVisibleTodos(state.todos, state.visibility)
});
export default connect(mapStateToProps)(TodoItems);
