import React, {Component} from 'react';

import Checkbox from '@material-ui/core/Checkbox';
import {ListItem} from 'material-ui/List';
import TextField from '@material-ui/core/TextField';
import {store} from '../Store'
import {changeText, toggleTodo, removeTodo} from "../Actions";

class AddTodo extends Component {


    render() {
        return (

            <ListItem
                disabled
                key={this.props.keys}>
                <Checkbox
                    checked={this.props.checked}
                    key={this.props.keys + 'cb'}
                    onChange={() => store.dispatch(toggleTodo(this.props.keys))}
                    value="checkedB"/>

                <TextField
                    //textbox will if disabled if todo is checked
                    disabled={this.props.checked}
                    fullWidth
                    key={this.props.keys + 'tf'}
                    value={this.props.text}
                    onChange={event => store.dispatch(changeText(this.props.keys, event.target.value))}
                    margin="normal"/>
                <button
                    key={this.props.keys + 'btn'}
                    onClick={() => store.dispatch(removeTodo(this.props.keys))}
                >Delete
                </button>
            </ListItem>

        );
    }
}

export default AddTodo;
