import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    headers: {
        "API-KEY": 'd83efb89-4feb-4eef-9f15-480e81d77784'
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
    follow(userId) {
        return instance.post(
            `follow/${userId}`)
            .then(response => response.data)
    }
}

export const authApi = {
    me() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    },
    login(email, password, rememberMe = false, captcha = null) {
        return instance.post('auth/login', {email, password, rememberMe, captcha})
            .then(response => response.data)
    },
    logout() {
        return instance.delete('auth/login')
            .then(response => response.data)
    },

}
export const securityAPI = {
    getCaptcha() {
        return instance.get('security/get-captcha-url')
            .then(response => response.data)
    }
}

export const profileApi = {
    getProfile(userId) {
        return instance.get(
            `profile/${userId}`)
            .then(response => response.data)
    },
    getUserStatus(userId) {
        try {
            return instance.get(
                `profile/status/${userId}`)
                .then(response => response.data)
        } catch (error) {
            console.log(error)
        }
    },
    updateUserStatus(status) {
        return instance.put(
            `profile/status`, {status})
            .then(response => response.data)
    },
    saveAvatar(avatar) {
        const formData = new FormData();
        formData.append("image", avatar);
        return instance.put(
            `profile/photo`, formData, {
                headers: {"Content-Type": "multipart/form-data"}
            })
            .then(response => response.data)
    },
    saveProfile(profile) {
        return instance.put('profile', profile)
            .then(response => response.data)
    },
}

