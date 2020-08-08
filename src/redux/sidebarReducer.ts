interface FriendType  {
    id: number,
    avatarUrl: string,
    name: string,
    link?: string
}


let initialState = {
    friendList: [
        {id: 1, avatarUrl: 'https://cdn1.iconfinder.com/data/icons/avatars-1-5/136/84-512.png', name: 'Tania Pidkivka', link: '#Tania-Pidkivka',},
        {id: 2, avatarUrl: 'https://cdn4.iconfinder.com/data/icons/men-avatars-icons-set-1/256/21-512.png', name: 'Dmutro Pidkivka', link: '#Dmutro-Pidkivka',},
        {id: 3, avatarUrl: 'https://cdn2.iconfinder.com/data/icons/men-avatars/33/man_2-512.png', name: 'Oleg Pupkin', link: '#Oleg-Pupkin',},
        {id: 4, avatarUrl: 'https://cdn2.iconfinder.com/data/icons/men-avatars/33/man_7-512.png', name: 'Nazar Pupkin', link: '#Nazar-Pupkin',},
    ] as Array<FriendType>
}
export type initialStateType = typeof initialState


const sidebarReducer = (state:initialStateType = initialState, action: any): initialStateType => {
    return state
}

export default sidebarReducer