import {
    addPost,
    removePost,
} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        posts: state.profile.posts
    }
}
const MyPostsContainer = connect(mapStateToProps,{addPost, removePost})(MyPosts)
//

export default MyPostsContainer;
