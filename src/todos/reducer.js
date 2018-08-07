import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from './actionType';

export default (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return Object.assign({}, state, {
                id: action.id,
                text: action.text,
                completed: action.completed
            });
            break;
        case TOGGLE_TODO:
            return state.map((item) => {
                if (item.id === action.id) {
                    return {
                        ...item, completed: !item.completed
                    }
                } else {
                    return item;
                }
            });
            break;
        case REMOVE_TODO:
            return state.filter((item) => {
                return item.id !== action.id
            });
            break;
        default:
            return state
    }
}