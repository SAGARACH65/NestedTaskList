import React, {Component} from 'react';

import Checkbox from '@material-ui/core/Checkbox';
import {ListItem} from 'material-ui/List';
import TextField from '@material-ui/core/TextField';
import {store} from '../Store'
import {changeText, toggleTodo, removeTodo, addFocus, removeFocus} from "../Actions";

//single to-do element
class Todo extends Component {

    render() {
        //handling key press
        let handleKeyPress = (ev) => {

            switch (ev.which) {
                case 13://enter key
                    console.log('enter pressed');
                    break;
                case 38://backspace
                    console.log('back');
                    break;
                case 9:
                    console.log('Tab');
                    break;
                default:
                    break;
            }
        };
        const marginLeft = this.props.indent * 40;
        return (

            <div style={{marginLeft: marginLeft}}>
                <ListItem
                    disabled
                    styles={{marginLeft: 100}}
                    key={this.props.keys}>
                    <Checkbox
                        checked={this.props.checked}
                        key={this.props.keys + 'cb'}

                        onChange={() => store.dispatch(toggleTodo(this.props.keys))}
                        value="checkedB"/>

                    <TextField
                        //textbox will be disabled if to-do is checked
                        disabled={this.props.checked}
                        fullWidth
                        key={this.props.keys + 'tf'}
                        value={this.props.text}
                        onChange={event => store.dispatch(changeText(this.props.keys, event.target.value))}
                        onFocus={() => store.dispatch(addFocus(this.props.keys))}
                        onBlur={() => store.dispatch(removeFocus(this.props.keys))}
                        onKeyPress={handleKeyPress}
                        margin="normal"/>
                    <button
                        key={this.props.keys + 'btn'}
                        onClick={() => store.dispatch(removeTodo(this.props.keys))}
                    >Delete
                    </button>
                </ListItem>
            </div>
        );
    }
}

export default Todo;
