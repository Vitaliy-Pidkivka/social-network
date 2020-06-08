import {authApi, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_AUTH_USER_DATA = "social-network/auth/SET-AUTH-USER-DATA";
const GET_CAPTCHA_URL = 'social-network/auth/GET-CAPTCHA-URL'

let initialState  = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null,
}
export type initialStateType = typeof initialState

const authReducer = (state = initialState, action: any): initialStateType => {
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
type setAuthUserDataActionPayloadType = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
}
type setAuthUserDataType = {
    type: typeof SET_AUTH_USER_DATA,
    payload: setAuthUserDataActionPayloadType

}
export const setAuthUserData = (userId: number | null,
                                email: string | null,
                                login: string | null,
                                isAuth: boolean): setAuthUserDataType => ({
    type: SET_AUTH_USER_DATA,
    payload: {userId, email, login, isAuth}
});
type getCaptchaSuccessType = {
    type: typeof GET_CAPTCHA_URL,
    url: string
}
export const getCaptchaSuccess = (url: string): getCaptchaSuccessType => ({type: GET_CAPTCHA_URL, url});
//redux-thunk
export const getAuthUserData = () => async (dispatch: any) => {
    const data = await authApi.me()

    if (data.resultCode === 0) {
        let {id, email, login} = data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}
export const login = (email:string, password:string, rememberMe: boolean, captcha:string) => async (dispatch: any) => {
    const data = await authApi.login(email, password, rememberMe, captcha)

    if (data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
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
export const logout = () => async (dispatch: any) => {
    const data = await authApi.logout()
    if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}
export const getCaptchaUrl = () => async (dispatch: any) => {
    const captchaUrl = await securityAPI.getCaptcha().then((data: any)  => data.url)
    dispatch(getCaptchaSuccess(captchaUrl))
}

export default authReducer