import React, {Component} from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

class TitleBar extends Component {
    render() {
        return (
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
        );
    }
}

export default TitleBar;
