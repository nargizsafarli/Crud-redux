const initialState = {
    users: [], 
    loading: false,
    error: null,
};

const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_USERS_REQUEST":
            return { ...state, loading: true, error: null };

        case "FETCH_USERS_SUCCESS":
            return { ...state, loading: false, users: action.payload };

        case "FETCH_USERS_FAILURE":
            return { ...state, loading: false, error: action.payload };

        case "ADD_USER_SUCCESS": 
            return { ...state, users: [...state.users, action.payload] };

        case "DELETE_USER_SUCCESS":  
            return { ...state, users: state.users.filter((user) => user.id !== action.payload) };

        case "UPDATE_USER_SUCCESS": 
            return { 
                ...state, 
                users: state.users.map((user) =>
                    user.id === action.payload.id ? action.payload : user
                ) 
            };

        default:
            return state;
    }
};

export default formReducer;
