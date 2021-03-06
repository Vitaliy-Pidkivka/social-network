import React from 'react';
import styles from './Dialogs.module.scss'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import Button from "../Shared/Button/Button";
import {Field, reduxForm} from "redux-form";
import CustomField from "../Shared/CustomFIeld/CustomField";
import {maxLength, required} from "../../utils/validators/validators";

let maxLength80 = maxLength(80)
const AddNewMessageForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <Field
            name={'newMessageBody'}
            types={'textarea'}
            validate={[required, maxLength80]}
            component={CustomField}
            placeholder="Send your message..."
            id={'newMessageBody'}
        />
        <Button
            onClick={props.handleSubmit}
            type={'submit'}
            value={"Send"}
            typeClass="aqua" sizeClass="small"
            className={styles["dialogs__btn"]}
        />
    </form>
}
const AddNewMessageReduxForm = reduxForm({form: 'AddNewMessageForm'})(AddNewMessageForm)

const Dialogs = (props) => {
    const {id} = props.match.params

    const addNewMessage = (values) => {
        props.addMessage(id, values.newMessageBody)
    }

    return (
        <div className={styles.dialogs}>
            <div className={styles['dialogs__items']}>
                {props.state.dialogList.map((dialog) => (
                    <Dialog {...dialog} key={dialog.id}/>
                ))}
            </div>
            {id && <div className={styles['dialogs__messages']}>
                {(props.state.messages[id] || []).map((item, index) => (
                    <Message {...item} key={index}/>
                ))}
                <AddNewMessageReduxForm onSubmit={addNewMessage}/>
            </div>}
        </div>
    )
};

export default Dialogs;