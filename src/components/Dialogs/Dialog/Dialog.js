import React from 'react';
import styles from './Dialog.module.scss'
import {NavLink} from "react-router-dom";

function Dialog(props) {
    let path = "/dialogs/" + props.id;
    return(
        <div className={styles.dialog}>
            <NavLink to={path}>{props.name}</NavLink> <button>Remove</button>
        </div>
    )
}

export default Dialog;