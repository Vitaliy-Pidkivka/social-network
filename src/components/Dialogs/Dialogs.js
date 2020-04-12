import React from 'react';
import styles from './Dialogs.module.scss'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const dialogs = [
    {name: 'Tania Pidkivka', id: 1},
    {name: 'Dmutro Pidkivka', id: 2}
    ]

const messages = {
    1: [{message: 'Hi how are you?'}, {message: "I'm fine and you?", opponent: true}, ],
    2: [{message: 'Hello, what are you doing?'}, {message: "Hi, i'm playing computer games", opponent: true},
        {message: "How are you?", opponent: true}, {message: "I'm fine, thanks"}, ],
}

const Dialogs = (props) => {
    const {id} = props.match.params
    return (
        <div className={styles.dialogs}>
            <div className={styles['dialogs__items']}>
                {dialogs.map((dialog, index) => (
                    //  <Message name={dialog.name} id={dialog.id} key={index}/>
                    <Dialog {...dialog} key={index}/>
                ))}
            </div>
            {id && <div className={styles['dialogs__messages']}>
                {(messages[id] || []).map((item,index) => (
                    //  <Message message={item.message} opponent={item.opponent} key={index}/>
                    <Message {...item} key={index}/>
                ))}
            </div>}
        </div>
    )
}

export default Dialogs;