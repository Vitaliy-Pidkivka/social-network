import React from 'react';
import styles from './Friend.module.scss'

const Friend = (props) => {

    return (
            <div className={styles.friend}>
                    <a href={props.link}>
                        <img className={styles['friend__avatar']}
                             src={props.avatarUrl} alt="#"/>
                        <span className={styles['friend__name']}>{props.name}</span>
                    </a>
            </div>
    );
}

export default Friend;
