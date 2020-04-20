const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const ADD_MESSAGE = "ADD-MESSAGE"


let initialState = {
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
}


const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT: {
            let stateCopy = {...state}
            stateCopy.newMessageText = action.messageBody;
            return stateCopy
        }
        case ADD_MESSAGE: {
            let newMessage = {
                id: 5,
                message: state.newMessageText,
                likes: 0
            }
            let stateCopy = {...state, messages: {...state.messages}}
            if (stateCopy.newMessageText) {
                stateCopy.messages[action.id].push(newMessage)
            } else {
                alert("You didn't write anything, please write the text")
            }
            stateCopy.newMessageText = ''
            return stateCopy
        }
        default:
            return state
    }
}

export const onMessageChangeCreator = (messageBody) => (
    {type: UPDATE_NEW_MESSAGE_TEXT, messageBody: messageBody}
);
export const addMessageCreator = (id) => ({type: ADD_MESSAGE, id: id});


export default dialogsReducer;