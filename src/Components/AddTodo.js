import React, {Component} from 'react';

import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';


import {store} from '../Store'
import {addTodo} from "../Actions";

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
