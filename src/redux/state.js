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
    }
}


export default state