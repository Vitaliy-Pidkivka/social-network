const ADD_MESSAGE = "social-network/dialogs/ADD-MESSAGE"

let initialState = {
    dialogList: [
        {name: 'Tania Pidkivka', id: 1},
        {name: 'Dmutro Pidkivka', id: 2}
    ],
    messages: {
        1: [{message: 'Hi how are you?'}, {message: "I'm fine and you?", opponent: true},],
        2: [{message: 'Hello, what are you doing?'}, {message: "Hi, i'm playing computer games", opponent: true},
            {message: "How are you?", opponent: true}, {message: "I'm fine, thanks"},],
    },
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let stateCopy = {...state, messages: {...state.messages}}
            stateCopy.messages[action.id].push({id: 5, message: action.messageBody, likes: 0})
            return stateCopy
        }
        default:
            return state
    }
}

export const addMessage = (id,messageBody) => ({type: ADD_MESSAGE, id, messageBody})

export default dialogsReducer