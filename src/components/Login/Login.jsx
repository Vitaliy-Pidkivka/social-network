import React from "react";
import {Field, reduxForm} from "redux-form";
import styles from './Login.module.scss'

const LoginForm = (props) => {
    const {handleSubmit} = props
    return (
        <form onSubmit={handleSubmit}>
            <Field placeholder={'Login'} name={'login'} component={'input'} type='text'/>
            <Field placeholder={'Password'} name={'password'} component={'input'} type='password'/>
            <div className={styles['input-group']}>
                <Field name={'rememberMe'} component={'input'} type='checkbox' id='rememberMe'/>
                <label htmlFor="rememberMe">Remember me</label>
            </div>
            <button className={styles.submit}  type='submit'>Login</button>
        </form>
    )
}
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = () => {
    let submit = (formData) => {
        console.log(formData)
    }
    return (
        <div className={styles.login}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={submit}/>
        </div>

    )
}

export default Login
