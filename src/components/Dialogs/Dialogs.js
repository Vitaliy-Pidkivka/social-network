import React from 'react';
import styles from './Dialogs.module.scss'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";



function Dialogs(props) {
    return (
            <div className={styles.dialogs}>
               <div className={styles['dialogs__items']}>
                   <Dialog name="Tania Pidkivka" id="1" />
                   <Dialog name="Dmutro Pidkivka" id="2" />
               </div>
                <div className={styles['dialogs__messages']}>
                   <Message message="Hi, how are you?" />
                   <Message message="I'm fine and you?" opponent="true" />
                </div>
            </div>
    )
}

export default Dialogs;