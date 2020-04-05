import React from 'react';
import styles from './Post.module.scss'

function Post(props) {
    return (
        <div className={styles.post}>
            <div className={styles['post__image']}>
                <img src="https://cdn2.iconfinder.com/data/icons/men-avatars/33/man_2-512.png" alt="#"/>
            </div>
            <div className={styles['post__message']}><p>{props.message}</p></div>
            <div className={styles['post__likes-count']}>
                <span>{props.likes}</span>
                <a  className={styles['post__likes-btn']} href="#placeholder">
                    <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/facebook/230/white-heart_1f90d.png" alt="#" />
                </a>
            </div>
        </div>
    );
}

export default Post;
