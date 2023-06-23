// actions.js
export const SET_LIST = 'SET_LIST';
export const DELETE_POST = 'DELETE_POST';
export const CHANGE_INDEX = 'CHANGE_INDEX';

export const setList = (posts) => {
    return {
        type: SET_LIST,
        payload: posts
    } 
}

export const deletePost = (index) => {
    return {
        type: DELETE_POST,
        payload: index
    }
}

export const changeIndex = (index) => {
    return {
        type: CHANGE_INDEX,
        payload: index
    }
}

