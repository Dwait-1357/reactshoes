const reducer = (state, action) => {
    switch (action.type) {
        case "SET_LOADING":
            return { ...state, isLoading: true };
        case "MY_API_DATA":
            return { ...state, isLoading: false, category: action.payload };
        case "MY_ERROR":
            return { ...state, isLoading: false, isError: true };
        case "SET_SINGLE_LOADING":
            return { ...state, isSingleLoading: true };
        case "SET_SINGLE_PRODUCT":
            return { ...state, isSingleLoading: false, singleProduct: action.payload };
        case "SET_SINGLE_ERROR":
            return { ...state, isSingleLoading: false, isError: true };
        default:
            return state;
    }
};

export default reducer;
