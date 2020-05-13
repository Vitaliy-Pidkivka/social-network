import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": '56713e4f-1fb2-40c8-8cb7-285eab7c3268'
    }
})

export const usersApi = {
    getUsers(currentPage = 1, pageSizes = 10) {
       return instance.get(
           `users?page=${currentPage}&count=${pageSizes}`)
            .then(response => response.data)
    },
    unfollow(userId) {
        return instance.delete(
            `follow/${userId}`)
            .then(response => response.data)
    },
    follow(userId){
        return instance.post(
            `follow/${userId}`)
            .then(response => response.data)
    }
}

export const authApi = {
    login(){
        return instance.get(`auth/me`)
            .then(response => response.data)
    },
}

export const profileApi = {
    getProfile (userId){
        return instance.get(
            `profile/${userId}`)
    },
    getUserStatus (userId){
        return instance.get(
            `profile/status/${userId}`
        )
    },
    updateUserStatus (status){
        return instance.put(
            `profile/status`,{status}
        )
    },
}

