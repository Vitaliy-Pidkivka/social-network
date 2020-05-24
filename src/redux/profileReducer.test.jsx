import profileReducer, {removePost} from "./profileReducer";

let state = {
    posts: [
        {id: 1, message: "Hi, how are you?", likes: 15},
        {id: 2, message: "It's my new post", likes: 20},
        {id: 3, message: "Social network in progress....", likes: 52},
    ],
    profile: null,
    status: '',
}


test("after deleting post length shouldn't be decrement", () => {
    // 1. test data
    let action = removePost(3);
    // 2. action
    let  newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.posts.length).toBe(2)
});
