import React, {Component} from 'react';

import Checkbox from '@material-ui/core/Checkbox';
import {ListItem} from 'material-ui/List';
import TextField from '@material-ui/core/TextField';

class AddTodo extends Component {
    render() {
        return (
            <div style={{margin: 30}}>
                <ListItem disabled>
                    <Checkbox
                        //checked={this.state.checkedB}
                        //     onChange={this.handleChange('checkedB')}
                        value="checkedB"
                        // color="primary"
                    />

                    <TextField
                        fullWidth
                        id="name"
                        label="Name"
                        margin="normal"

                    />
                    <button>Delete</button>
                </ListItem>
            </div>

        );
    }
}

export default AddTodo;
