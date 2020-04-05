import React from 'react';
import styles from './Dialogs.module.scss'

function Dialogs(props) {
    return (
            <div className={styles.dialogs}>
               <div className={styles['dialogs__items']}>
                   <div className={styles.dialog}>
                      <span>Dmutro Pidkivka</span> <button>Remove dialog</button>
                   </div>
                   <div className={styles.dialog}>
                       <span>Tania Pidkivka</span> <button>Remove dialog</button>
                   </div>
                   <div className={styles.dialog}>
                       <span>Natalia Pidkivka</span> <button>Remove dialog</button>
                   </div>
                   <div className={styles.dialog}>
                       <span>Vasul Pidkivka</span> <button>Remove dialog</button>
                   </div>
               </div>
                <div className={styles['dialogs__messages']}>
                    <div className={styles.message}><span className="message__text">Lorem ipsum dolor.</span> <button>Remove nessage</button></div>
                    <div className={`${styles.message} ${styles.opponent}`}><span className="message__text">Lorem ipsum dolor.</span> <button>Remove nessage</button></div>
                    <div className={styles.message}><span className="message__text">Lorem ipsum dolor.</span> <button>Remove nessage</button></div>
                </div>
            </div>
    )
}

export default Dialogs;