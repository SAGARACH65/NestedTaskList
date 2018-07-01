import {Visibility} from '../Actions'

const visibility = (state = Visibility.SHOW_ALL, action) => {
    switch (action.type) {
        case 'SET_VISIBILITY':
            return ({visibility: action.filter});
        default:
            return state
    }
};

export default visibility
