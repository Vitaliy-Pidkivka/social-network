import {renderEntireTree} from "../render";

const state = {
    profile: {
        posts: [
            {message: "Hi, how are you?", likes: 15},
            {message: "It's my new post", likes: 20},
            {message: "Social network in progress....", likes: 52},
        ]
    },
    dialogs: {
        dialogList: [
            {name: 'Tania Pidkivka', id: 1},
            {name: 'Dmutro Pidkivka', id: 2}
        ],
        messages: {
            1: [{message: 'Hi how are you?'}, {message: "I'm fine and you?", opponent: true},],
            2: [{message: 'Hello, what are you doing?'}, {message: "Hi, i'm playing computer games", opponent: true},
                {message: "How are you?", opponent: true}, {message: "I'm fine, thanks"},],
        }
    },
    sidebar:{
        friendList: [
            {id: 1, name: 'Tania Pidkivka',link: '#Tania-Pidkivka', },
            {id: 2, name: 'Dmutro Pidkivka',link: '#Dmutro-Pidkivka', },
            {id: 3, name: 'Oleg Pupkin', link: '#Oleg-Pupkin', },
            {id: 4, name: 'Nazar Pupkin',link: '#Nazar-Pupkin', },
        ]
    }
}

export const addPost = (postText) => {
    let newPost = {
        id:5,
        message: postText,
        likes:0
    }
    state.profile.posts.push(newPost)
    renderEntireTree(state, addPost,removePost)
}
export const removePost = () =>{
    state.profile.posts.pop()
    renderEntireTree(state, addPost, removePost)
}


export default state