import React from 'react';
import styles from './Dialog.module.scss'
import {NavLink} from "react-router-dom";
import Button from "../../Shared/Button/Button";

const Dialog = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={styles.dialog}>
            <NavLink to={path}>{props.name}</NavLink> <Button value="remove" sizeClass="small" typeClass='aqua'/>
        </div>
    )
}

export default Dialog;