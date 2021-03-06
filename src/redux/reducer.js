const initialState = {
    records: [],
};

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET RECORD":
            return {
                ...state,
                records: action.payload,
            };

        case "GET RECORD ERR":
            return { ...state };

        default:
            return state;
    }
};

export default Reducer;
