import { combineReducers } from "redux"

import posts from "./postsReducer"


// do not put this in index.js, as it's the entry of reducer
export default combineReducers({
	posts
})