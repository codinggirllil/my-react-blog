const initState = {
	posts: [],
	fetching: false,
	fetched: false,
	error: null
}

export default function reducer(state = initState, action) {

	switch (action.type) {
		case "FETCH_POST":
		case "FETCH_POSTS": {
			return {...state, fetching: true}
		}

		case "FETCH_POST_REJECTED":
		case "FETCH_POSTS_REJECTED": {
			return {...state, fetching: false, error: action.payload}
		}

		case "FETCH_POSTS_FULFILLED": {
			return {
				...state,
				fetching: false,
				fetched: true,
				posts: action.payload.posts
			}
		}

		case "FETCH_POST_FULFILLED": {
			return {
				...state, 
				fetching: false,
				fetched: true,
				posts: state.posts.filter(post => post.id === action.payload)
			}
		}

		case "ADD_POST": {
			return {
				...state,
				posts: [...state.posts, action.payload]
			}
		}

		case "UPDATE_POST": {
			const { id, title, text } = action.payload
			const newPosts = [...state.posts]
			const postToUpdate = newPosts.findIndex(post => post.id ===id)
			newPosts[postToUpdate] = action.payload

			// try to use immutable collection for Javascript
			const newState =  {
				...state,
				posts: newPosts
			}

			return newState;
		}

		case "DELETE_POST": {
			return {
				...state,
				posts: state.posts.filter(post => post.id !== action.payload)
			}
			//use immutable collections for Javascript
		}

		case "DELETE_ALL_POSTS": {
			return initState
		}

	}
	return state
}