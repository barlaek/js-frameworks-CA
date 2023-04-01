export const searchState = { searchQuery: "" };

export const searchReducer = (state, action) => {
    switch(action.type) {
        case 'searchProducts':
            return {...state, searchQuery: action.payload }

        case 'clearFilter':
            return { searchQuery: "" };
        
        default:
            return state;
    }
}