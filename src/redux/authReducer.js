import {authApi} from "../api/api";

const SET_AUTH_USER_DATA = "SET-AUTH-USER-DATA";


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
                ...action.data,
                isAuth: true,
            }
        }

        default:
            return state
    }
}

export const setAuthUserData = (id, email, login) => ({type: SET_AUTH_USER_DATA, data:{userId: id, email, login}});
//redux-thunk
export const  getAuthUserData = () => {
    return (dispatch) =>{
        authApi.login()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, email, login }= data.data
                     dispatch(setAuthUserData(id,email,login))
                }
            })
    }
}

export default authReducer;