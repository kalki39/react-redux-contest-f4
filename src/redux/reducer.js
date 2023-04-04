


const initialState = {
    post: [],
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'postSave':
            return {
                ...state,
                post: action.payload,
            }
        default:
            return state;
    }
}

export default reducer;