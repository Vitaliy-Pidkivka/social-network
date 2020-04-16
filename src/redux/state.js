const store = {

    _state: {
        profile: {
            posts: [
                {message: "Hi, how are you?", likes: 15},
                {message: "It's my new post", likes: 20},
                {message: "Social network in progress....", likes: 52},
            ],
            newPostText: 'social network in progress...',
        },
        dialogs: {
            dialogList: [
                {name: 'Tania Pidkivka', id: 1},
                {name: 'Dmutro Pidkivka', id: 2}
            ],
            messages: {
                1: [{message: 'Hi how are you?'}, {message: "I'm fine and you?", opponent: true},],
                2: [{message: 'Hello, what are you doing?'}, {
                    message: "Hi, i'm playing computer games",
                    opponent: true
                },
                    {message: "How are you?", opponent: true}, {message: "I'm fine, thanks"},],
            }
        },
        sidebar: {
            friendList: [
                {id: 1, name: 'Tania Pidkivka', link: '#Tania-Pidkivka',},
                {id: 2, name: 'Dmutro Pidkivka', link: '#Dmutro-Pidkivka',},
                {id: 3, name: 'Oleg Pupkin', link: '#Oleg-Pupkin',},
                {id: 4, name: 'Nazar Pupkin', link: '#Nazar-Pupkin',},
            ]
        }
    },
    _callSubscriber() {
    },
    // addPost() {
    //     let newPost = {
    //         id: 5,
    //         message: this._state.profile.newPostText,
    //         likes: 0
    //     }
    //         this._state.profile.posts.push(newPost)
    //         this._state.profile.newPostText = ''
    //     this._callSubscriber(this._state)
    // },
    // removePost() {
    //     this._state.profile.posts.pop()
    //     this._callSubscriber(this._state)
    // },
    // updateNewPostText(text) {
    //     this._state.profile.newPostText = text;
    //     this._callSubscriber(this._state)
    // },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profile.newPostText,
                likes: 0
            }
            this._state.profile.posts.push(newPost)
            this._state.profile.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === 'REMOVE-POST') {
            this._state.profile.posts.pop()
            this._callSubscriber(this._state)
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profile.newPostText = action.text;
            this._callSubscriber(this._state)
        }

    }
}


export default store