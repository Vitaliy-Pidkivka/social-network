import {authApi} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_AUTH_USER_DATA = "social-network/auth/SET-AUTH-USER-DATA";


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA: {
            return {
                ...state,
                ...action.payload,
            }
        }

        default:
            return state
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_AUTH_USER_DATA,
    payload: {userId, email, login, isAuth}
});
//redux-thunk
export const getAuthUserData = () => async dispatch => {
    let data = await authApi.me()

    if (data.resultCode === 0) {
        let {id, email, login} = data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}

export const login = (email, password, rememberMe) => async dispatch => {
    let data = await authApi.login(email, password, rememberMe)

    if (data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        let errorMessage = 'Common error'
        if (data.messages.length > 0) {
            errorMessage = data.messages
        }
        dispatch(stopSubmit('login', {_error: errorMessage}))
    }
}
export const logout = () => async dispatch => {
    let data = await authApi.logout()

    if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}


export default authReducer;