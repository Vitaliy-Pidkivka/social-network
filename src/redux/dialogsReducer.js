const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const ADD_MESSAGE = "ADD-MESSAGE"

const profileReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.messageBody;
            return state
        case ADD_MESSAGE:
            let newMessage = {
                id: 5,
                message: state.newMessageText,
                likes: 0
            }
            if (state.newMessageText) {
                state.messages["1"].push(newMessage)
            } else {
                alert("You didn't write anything, please write the text")
            }
            state.newMessageText = ''
            return state
        default:
            return state
    }
}

export const onMessageChangeCreator = (messageBody) => (
    {type: UPDATE_NEW_MESSAGE_TEXT, messageBody: messageBody}
);
export const addMessageCreator = () => ({type: ADD_MESSAGE});


export default profileReducer;