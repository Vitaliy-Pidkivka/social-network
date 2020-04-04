import React from 'react';
import styles from './Post.module.scss'

function Post() {
    return (
        <div className={styles.post}>
            <div className={styles['post__image']}>
                <img src="https://cdn2.iconfinder.com/data/icons/men-avatars/33/man_2-512.png" alt="#"/>
            </div>
            <div className={styles['post__message']}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, non?</div>
        </div>
    );
}

export default Post;
