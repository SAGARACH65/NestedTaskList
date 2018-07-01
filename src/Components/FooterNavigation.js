import React, {Component} from 'react';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import DescIcon from '@material-ui/icons/Description';
import FlipIcon from '@material-ui/icons/FlipToFront';
import DoneIcon from '@material-ui/icons/DoneAll';
import {store} from '../Store'
import {setVisibility, Visibility} from "../Actions";

class FooterNavigation extends Component {
    render() {
        return (
            <div style={{margin: 50}}>
                <BottomNavigation showLabels>
                    <BottomNavigationAction

                        onClick={() => {

                            store.dispatch(setVisibility(Visibility.SHOW_ALL))

                        }}
                        label="Show All" icon={<DescIcon/>}/>
                    <BottomNavigationAction
                        onClick={() =>
                            store.dispatch(setVisibility(Visibility.SHOW_ACTIVE))

                        }
                        label="show Active"
                        icon={<FlipIcon/>}/>
                    <BottomNavigationAction

                        onClick={() =>
                            store.dispatch(setVisibility(Visibility.SHOW_COMPLETED))

                        }
                        label="Show Completed"
                        icon={<DoneIcon/>}/>

                </BottomNavigation>
            </div>
        );
    }
}

export default FooterNavigation;
