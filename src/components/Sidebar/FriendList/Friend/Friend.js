import React from 'react';
import styles from './Friend.module.scss'

const Friend = (props) => {
    return (
            <div className={styles.friend}>
                <div className={styles['friend__inner']}>
                    <a href="#pl">
                        <img className={styles['friend__avatar']}
                             src="https://cdn2.iconfinder.com/data/icons/men-avatars/33/man_2-512.png" alt=""/>
                        <span className={styles['friend__name']}>Tania Pidkivka</span>
                    </a>
                </div>
            </div>
    );
}

export default Friend;
