import React, {Component} from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import {ListItem} from 'material-ui/List';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import DescIcon from '@material-ui/icons/Description';
import FlipIcon from '@material-ui/icons/FlipToFront';
import DoneIcon from '@material-ui/icons/DoneAll';

import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';


class Main extends Component {
    render() {
        return (
            <Paper elevation={4} style={{width: 700}}>
                <div>
                    <div>
                        <AppBar position="static">
                            <Toolbar>
                                <IconButton color="inherit" aria-label="Menu">
                                    <MenuIcon/>
                                </IconButton>
                                <Typography variant="title" color="inherit">
                                    Nested Task Lists
                                </Typography>
                            </Toolbar>
                        </AppBar>
                    </div>
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
                        </ListItem>
                    </div>
                </div>

                <div style={{margin: 50}}>
                    <BottomNavigation
                        showLabels>
                        <BottomNavigationAction label="Show All" icon={<DescIcon/>}/>
                        <BottomNavigationAction label="show Active" icon={<FlipIcon/>}/>
                        <BottomNavigationAction label="Show Completed" icon={<DoneIcon/>}/>
                    </BottomNavigation>
                </div>
            </Paper>
        );
    }
}

export default Main;
