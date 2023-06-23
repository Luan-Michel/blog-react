// reducers.js
import { DELETE_POST, SET_LIST, CHANGE_INDEX } from "./actions";

const initialState = {
    posts: [],
    editing: 0
};

const postsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_LIST:
            return {
                ...state,
                posts: [...action.payload]
            };
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter((e, i) => i !== action.payload)
            }
        case CHANGE_INDEX:
            return {
                ...state,
                editing: action.payload
            }
        default:
            return state;
    }
}

export default postsReducer;