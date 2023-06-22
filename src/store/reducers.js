// reducers.js
import { SET_LIST } from "./actions";

const initialState = {
    posts: [],
};

const postsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_LIST:
            return {
                ...state,
                posts: [...action.payload]
            };
        default:
            return state;
    }
}

export default postsReducer;