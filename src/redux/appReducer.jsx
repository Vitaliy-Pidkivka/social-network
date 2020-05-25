import {getAuthUserData} from "./authReducer";

const INITIALIZED_SUCCESS = "social-network/app/INITIALIZED_SUCCESS";

let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return {
                ...state,
                initialized: true,
            }
        }
        default:
            return state
    }
}

export const initializedSuccess = () => ({
    type: INITIALIZED_SUCCESS
});
//redux-thunk
export const initializeApp = () => async dispatch => {
        await dispatch(getAuthUserData());
            dispatch(initializedSuccess());
}


export default appReducer;