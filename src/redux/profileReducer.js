const ADD_POST = "ADD-POST";
const REMOVE_POST = "REMOVE-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";


let initialState = {
    posts: [
        {message: "Hi, how are you?", likes: 15},
        {message: "It's my new post", likes: 20},
        {message: "Social network in progress....", likes: 52},
    ],
    newPostText: 'social network in progress...',
}



const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likes: 0
            }
            let stateCopy = {...state, posts: [...state.posts]}
            console.log(stateCopy)
            if (stateCopy.newPostText) {
                stateCopy.posts.push(newPost)
            } else {
                alert("You didn't write anything, please write the text")
            }
            stateCopy.newPostText = ''
            return stateCopy;
        }
        case REMOVE_POST: {
            let stateCopy = {...state}
            stateCopy.posts.pop()
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state}
            stateCopy.newPostText = action.text;
            return stateCopy
        }
        default:
            return state
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const removePostActionCreator = () => ({type: REMOVE_POST});
export const onPostChangeActionCreator = (text) => (
    {type: UPDATE_NEW_POST_TEXT, text: text}
);

export default profileReducer;