import {getAuthUserData} from "./authReducer";

const INITIALIZED_SUCCESS = "social-network/app/INITIALIZED_SUCCESS";

export type  InitialStateType = {
    initialized: boolean
}

let initialState = {
    initialized: false
}

const appReducer = (state= initialState, action: any): InitialStateType => {
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

type initializeSuccessActionType = { type: typeof INITIALIZED_SUCCESS}
export const initializedSuccess = ():initializeSuccessActionType => ({  type: INITIALIZED_SUCCESS});
//redux-thunk
export const initializeApp = () => async (dispatch: any) => {
    await dispatch(getAuthUserData());
    dispatch(initializedSuccess());
}


export default appReducer;