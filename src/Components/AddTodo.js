import React, {Component} from 'react';

import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import NavigationIcon from '@material-ui/icons/Navigation';

import {store} from '../Store'
import {addTodo, removeTodo, setVisibility, Visibility} from "../Actions";

class AddTodo extends Component {
    render() {
        return (

            <div style={{marginLeft: 600}}>
                <Button
                    variant="fab"
                    color="primary"
                    aria-label="add"
                    onClick={() => store.dispatch(addTodo(''))}
                >
                    <AddIcon/>
                </Button>
            </div>
        );
    }
}

export default AddTodo;
