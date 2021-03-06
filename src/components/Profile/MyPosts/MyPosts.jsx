import React from 'react';
import styles from './MyPosts.module.scss'
import Post from "./Post/Post";
import Button from "../../Shared/Button/Button";
import {Field, reduxForm} from "redux-form";
import CustomField from "../../Shared/CustomFIeld/CustomField";
import {maxLength, required} from "../../../utils/validators/validators";

const maxLength100 = maxLength(100,)
const AddNewPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <Field
            name={'newPostBody'}
            component={CustomField}
            types={'textarea'}
            validate={[required, maxLength100]}
            placeholder={'My own social network in progress...'}
            id={'newPostBody'}
        />
        <Button
            type={'submit'}
            onClick={props.onClick}
            value="Add post" typeClass="aqua"
        />
    </form>
}

const AddNewPostReduxForm = reduxForm({form: 'addNewPostForm'})(AddNewPostForm)

const MyPosts = React.memo(props => {
    const addPost = (values) => {
        props.addPost(values.newPostBody)
    }

    return (
        <div className={styles.myPosts}>
            <div className={styles['myPosts__title']}>
                <p> My posts </p>
            </div>
            <div className={styles['newPost']}>
                <AddNewPostReduxForm onSubmit={addPost}/>
            </div>
            <div className="posts">
                {props.posts.map(post =>
                    <Post {...post}
                          id={post.id}
                          key={post.id}
                          removePost={props.removePost}
                    />)}
            </div>
        </div>
    )
})

export default MyPosts;
