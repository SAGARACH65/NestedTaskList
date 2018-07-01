import React, {Component} from 'react';
import Todo from './Todo';
import {connect} from 'react-redux';
import {Visibility} from "../Actions";
import {store} from '../Store'

class TodoItems extends Component {

    render() {
        const Todos = this.props.todos.map(todo =>

            <Todo text={todo.text} indent={todo.indent} checked={todo.completed} keys={todo.id}/>
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

let isParent = (item) => {
    return (item.parent == null);
};
let hasChildren = (item) => {
    return (item.children!=null);
};

/*
*THis function uses recursion to construct a tree that is just displayed by the Todo function
* It checks the parent node and then continues recursively to ites child adding the no od indentations needed
* Finally a object s constructed which contains the number of indentations and the destructured hiearchical component tree
 */
let calculateTodoTree = (todo) => {
    let result = [], childIndent;
    todo.map((item) => {
        if (isParent(item)) {
            result.push(item);
            childIndent = 1;

            if (hasChildren(item)) {
                let recursivePush = (index) => {
                    index.map(i => {
                        todo[i].indent=childIndent;
                        result.push(todo[i]);
                        childIndent++;
                        if (hasChildren(todo[i])) {
                            recursivePush(todo[i].children);
                        }
                    })
                };
                recursivePush(item.children);

            }


        }
    });

    console.log(result);
return result;
};

const mapStateToProps = state => ({
    todos: calculateTodoTree(getVisibleTodos(state.todos, state.visibility))
});


export default connect(mapStateToProps)(TodoItems);
