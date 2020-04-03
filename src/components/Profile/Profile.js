import React from 'react';
import  styles from './Profile.module.scss'

function Profile() {
    return (
        <div className={styles.profile}>
            <div className="profile__img">
                <img
                    src="https://lh3.googleusercontent.com/proxy/BKVe7h9x5fKLER6qmjW8m2ky45ZVagBiR8f7nxktxqZ8NBDukSE2SmEub23zkq1jpB7kv8NgqA8t91zvN02yby6Hc8_DqV2IsmjFevAbztBdqum0BHXQ0TcX1kW0CYf_W5cZiFF13RM"
                    alt="#"
                />
            </div>
            <div>
                ava+descr
            </div>
            <div>
                myPosts
                <div>
                    newPost
                </div>
                <div>
                    post1
                </div>
                <div>
                    post2
                </div>
            </div>
        </div>
    );
}

export default Profile;
