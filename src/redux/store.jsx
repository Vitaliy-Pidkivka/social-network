import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

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
                2: [{message: 'Hello, what are you doing?'}, { message: "Hi, i'm playing computer games",  opponent: true },
                    {message: "How are you?", opponent: true}, {message: "I'm fine, thanks"},],
            },
            newMessageText: '',
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
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        profileReducer(this._state.profile, action)
        dialogsReducer(this._state.dialogs, action)
        sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state)
    }
}



// window.store = store

export default store