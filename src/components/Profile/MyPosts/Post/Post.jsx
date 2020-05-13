import React from 'react';
import styles from './Post.module.scss'
import userAvatar from '../../../../assets/images/user-avatar.png'
const Post = (props) => {
    const {message,likes} = props
    return (
        <div className={styles.post}>
            <div className={styles['post__image']}>
                <img src={userAvatar} alt="#"/>
            </div>
            <div className={styles['post__message']}><p>{message}</p></div>
            <div className={styles['post__likes-count']}>
                <span>{likes}</span>
                <a className={styles['post__likes-btn']} href="#placeholder">
                    <img
                        src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/facebook/230/white-heart_1f90d.png"
                        alt="#"/>
                </a>
            </div>
        </div>
    );
}

export default Post;
