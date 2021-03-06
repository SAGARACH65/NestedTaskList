import {createStore} from "redux";
import reducer from "../Reducers";
import {addTodo} from "../Actions";

const initialState = {};
export const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


//initial data
store.dispatch(addTodo('Welcome to this nested task list!'));
store.dispatch(addTodo('You\'ll find it quite intuitive. Just type!'));
store.dispatch(addTodo('You can add a new item by pressing enter.',null,[3]));
store.dispatch(addTodo('Move up/down using the arrows. Indent with tab/shift+tab.',2));
store.dispatch(addTodo('Move an item up/down with cmd+up/cmd+down.',null,[5]));
store.dispatch(addTodo('Delete an empty line with backspace, or click the delete key.',4));
store.dispatch(addTodo('Enjoy!'));

