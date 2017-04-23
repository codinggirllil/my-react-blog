import axios from "axios";

export function fetchPosts() {
	return {
		type: "FETCH_POSTS_FULFILLED",
		payload: {
			posts: [
				{
					id: 101, 
					text: "This is the content of my blog post.",
					timestamp: "Thu Jul 01 09:46:02 PST 2010",
					title: "The Title of My Blog Post"
				},{
					id: 102,
					text: "Dear diary, today I met a fish who could talk.",
					timestamp: "Thu Jun 29 17:49:27 PST 2010",
					title: "A Weird Thing Happened..."
				}

			]
		}
	}
}

export function fetchPost() {
	return {
		type: "FETCH_POST_FULFILLED",
		payload: 101
	}
}

export function addPost() {
	return {
		type: "ADD_POST",
		payload: {
			id: 103,
			text: "This is a test text!!!!",
			timestamp: "Thu Apr 20 19:20:33 PST 2017",
			title: "Test Title!!!!!"
		}
	}
}

// update /etc/hosts file
// try to use https

// export function addPost() {
// 	return function(dispatch) {
// 		debugger;
// 		const newPost = {
// 			id: 103,
// 			text: "This is a test text!!!!",
// 			timestamp: "Thu Apr 20 19:20:33 PST 2017",
// 			title: "Test Title!!!!!"
// 		}
//     	// Update data
// 	    axios.post('http://morning-ridge-15434.herokuapp.com/Blog/api', newPost)
// 	       .then((res) => {

// 	          dispatch({type: "ADD_POST", payload: res.blog.posts[0]})
// 	       });
// 	}
// }

export function updatePost() {
	return {
		type: "UPDATE_POST",
		payload: {
			id: 103,
			text: "Text has been updated!!!!",
			timestamp: "Thu Apr 20 19:20:33 PST 2017",
			title: "Title has been updated!!!!!"
		}
	}
}

export function deletePost() {
	return {
		type: "DELETE_POST",
		payload: 103
	}
}

export function deleteAllPosts() {
	return {
		type: "DELETE_ALL_POSTS"
	}
}