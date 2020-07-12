import React from "react";
import {reduxForm} from "redux-form";
import styles from './Login.module.scss'
import CustomField, {createField} from "../Shared/CustomFIeld/CustomField";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import Button from "../Shared/Button/Button";

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField('Email', 'email', 'input', CustomField, [required], 'text')}
            {createField('Password', 'password', 'input', CustomField, [required], 'password')}
            {createField('', 'rememberMe', 'input', CustomField, [],
                'checkbox', {}, 'Remember me', [styles['input-group']])}
            {error && <div className={styles.error}>{error}</div>}
            {captchaUrl && <img src={captchaUrl} alt=""/>}
            {captchaUrl && createField('Captcha for image', 'captcha', 'input',
                CustomField, [required], 'text')}
            <Button
                typeClass={'aqua'}
                value={'Login'}
                type='submit'
            />
        </form>
    )
}
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)
const Login = (props) => {
    if (props.isAuth) {
        return <Redirect to='/profile'/>
    }
    let submit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
    return (
        <div className={styles.login}>
            <h1>Login</h1>
            <LoginReduxForm
                onSubmit={submit}
                captchaUrl={props.captchaUrl}
            />
        </div>

    )
}
let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl,
    }
}
export default connect(mapStateToProps, {login})(Login)
