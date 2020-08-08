export type PostType = {
    id: number,
    message: string,
    likes: number
}
export type ContactsType ={
    github: string,
    vk: string,
    facebook: string,
    instagram: string,
    twitter: string,
    website: string,
    youtube: string,
    mainLink: string,
}
export type PhotosType = {
    small: string | null,
    large: string | null
}
export type ProfileType = {
    userId: number,
    lookingForAJob: boolean,
    lookingForAJobDescription: boolean,
    fullName: string,
    contacts: ContactsType,
    photos: PhotosType,
}