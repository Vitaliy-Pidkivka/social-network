import React from "react";
import {Field, reduxForm} from "redux-form";
import styles from './Login.module.scss'
import CustomField from "../Shared/CustomFIeld/CustomField";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";

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
    if(props.isAuth){
        return <Redirect to='/profile'/>
    }
    let submit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    return (
        <div className={styles.login}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={submit}/>
        </div>

    )
}
let mapStateToProps = (state)=> {
    return {
        isAuth: state.auth.isAuth
    }
}
export default connect(mapStateToProps, {login})(Login)
