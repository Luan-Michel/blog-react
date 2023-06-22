// actions.js
export const SET_LIST = 'SET_LIST';

export const setList = (posts) => {
    return {
        type: SET_LIST,
        payload: posts
    } 
}