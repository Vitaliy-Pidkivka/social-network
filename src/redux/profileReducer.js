const ADD_POST = "ADD-POST";
const REMOVE_POST = "REMOVE-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likes: 0
            }
            if (state.newPostText) {
                state.posts.push(newPost)
            } else {
                alert("You didn't write anything, please write the text")
            }
            state.newPostText = ''
            return state;
        case REMOVE_POST:
            state.posts.pop()
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.text;
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