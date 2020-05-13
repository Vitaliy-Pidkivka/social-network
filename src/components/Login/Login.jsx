import React from "react";
import {Field, reduxForm} from "redux-form";
import styles from './Login.module.scss'
import CustomField from "../Shared/CustomFIeld/CustomField";
import {required} from "../../utils/validators/validators";

const LoginForm = (props) => {
    const {handleSubmit} = props
    return (
        <form onSubmit={handleSubmit}>
            <Field placeholder={'Email'}
                   name={'email'}
                   types={'input'}
                   component={CustomField}
                   validate={[required]}
                   type='text'/>
            <Field placeholder={'Password'}
                   name={'password'}
                   types={'input'}
                   component={CustomField}
                   validate={[required]}
                   type='password'/>
            <div className={styles['input-group']}>
                <Field name={'rememberMe'}  types={'checkbox'} component={CustomField}  type='checkbox' id='rememberMe'/>
                <label htmlFor="rememberMe">Remember me</label>
            </div>
            <button className={styles.submit}  type='submit'>Login</button>
        </form>
    )
}
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    let submit = (formData) => {
    }
    return (
        <div className={styles.login}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={submit}/>
        </div>

    )
}

export default Login
