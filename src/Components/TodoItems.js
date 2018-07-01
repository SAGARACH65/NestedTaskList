import React, {Component} from 'react';
import AddTodo from './AddTodo';
import {connect} from 'react-redux';
import {addTodo} from "../Actions";
import {store} from '../Store'

class TodoItems extends Component {


    render() {

        const Todos =this.props.todos.map(todo=>
        <AddTodo text={todo.text}  keys={todo.id}/>
        );
        return (
            <div>
                {Todos}
            </div>

        );
    }
}
const mapStateToProps = state => ({
   todos:state.todos
});

export default connect(mapStateToProps)(TodoItems);
