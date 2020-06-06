import {authApi, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_AUTH_USER_DATA = "social-network/auth/SET-AUTH-USER-DATA";
const GET_CAPTCHA_URL = 'socila-network/auth/GET-CAPTCHA-URL'

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA: {
            return {
                ...state,
                ...action.payload,
            }
        }
        case GET_CAPTCHA_URL: {
            return {
                ...state,
                captchaUrl: action.url
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
export const getCaptchaSuccess = (url) => ({type: GET_CAPTCHA_URL, url});
//redux-thunk
export const getAuthUserData = () => async dispatch => {
    const data = await authApi.me()

    if (data.resultCode === 0) {
        let {id, email, login} = data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}

export const login = (email, password, rememberMe, captcha) => async dispatch => {
    const data = await authApi.login(email, password, rememberMe, captcha)

    if (data.resultCode === 0) {
        dispatch(getAuthUserData())
    }  else {
        if (data.resultCode === 10) {
            dispatch(getCaptchaUrl())
        }
        let errorMessage = 'Common error'
        if (data.messages.length > 0) {
            errorMessage = data.messages
        }
        dispatch(stopSubmit('login', {_error: errorMessage}))
    }
}
export const logout = () => async dispatch => {
    const data = await authApi.logout()
    if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}
export const getCaptchaUrl = () => async dispatch => {
    const captchaUrl = await securityAPI.getCaptcha().then(data => data.url)
    dispatch(getCaptchaSuccess(captchaUrl))
}


export default authReducer;