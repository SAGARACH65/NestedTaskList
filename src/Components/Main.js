import React, {Component} from 'react';


import Paper from '@material-ui/core/Paper';

import FooterNavigation from './FooterNavigation'
import TitleBar from './TitleBar'
import TodoItems from './TodoItems'
import AddTodo from './AddTodo'

import {Provider} from 'react-redux'
import {store} from '../Store'

class Main extends Component {
    render() {
        return (
            <Provider store={store}>
                <Paper elevation={4} style={{width: 700}}>
                    <TitleBar/>
                    <TodoItems/>
                    <AddTodo/>
                    <FooterNavigation/>
                </Paper>
            </Provider>
        );
    }
}

export default Main;
