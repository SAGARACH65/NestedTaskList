import React, {Component} from 'react';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import DescIcon from '@material-ui/icons/Description';
import FlipIcon from '@material-ui/icons/FlipToFront';
import DoneIcon from '@material-ui/icons/DoneAll';


class FooterNavigation extends Component {
    render() {
        return (
            <div style={{margin: 50}}>
                <BottomNavigation
                    showLabels>
                    <BottomNavigationAction label="Show All" icon={<DescIcon/>}/>
                    <BottomNavigationAction label="show Active" icon={<FlipIcon/>}/>
                    <BottomNavigationAction label="Show Completed" icon={<DoneIcon/>}/>
                </BottomNavigation>
            </div>
        );
    }
}
export default FooterNavigation;
