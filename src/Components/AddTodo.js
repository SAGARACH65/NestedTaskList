import React, {Component} from 'react';

import Checkbox from '@material-ui/core/Checkbox';
import {ListItem} from 'material-ui/List';
import TextField from '@material-ui/core/TextField';
import {store} from '../Store'
import {changeText} from "../Actions";

class AddTodo extends Component {


    render() {
        return (

            <ListItem
                disabled
                key={this.props.keys}>
                <Checkbox
                    //checked={this.state.checkedB}
                    //     onChange={this.handleChange('checkedB')}
                    key={this.props.keys + 'cb'}
                    value="checkedB"/>

                <TextField
                    fullWidth
                    key={this.props.keys + 'tf'}
                    value={this.props.text}
                    onChange={(text) =>  store.dispatch(changeText(this.props.keys,text))}
                    margin="normal"/>
                <button
                    key={this.props.keys + 'btn'}>Delete
                </button>
            </ListItem>

        );
    }
}

export default AddTodo;
