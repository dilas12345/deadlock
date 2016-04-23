import API_URL from '../API_URL.js'

export const m = (old, over) => Object.assign({}, old, over)

export function fetch_with_actions(url) {
    return (dispatch, action_before, action_creator_after) => {
        dispatch(action_before)
        fetch(url)
            .then(response => response.json())
            .then(json => dispatch(action_creator_after(json)))
    }
}

export const myfetch = (path) => fetch_with_actions(API_URL+path)
