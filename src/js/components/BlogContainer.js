import React from "react"
import { connect } from "react-redux"

import { fetchPosts } from "../actions/postsActions"
import { fetchPost } from "../actions/postsActions"
import { addPost } from "../actions/postsActions"
import { updatePost } from "../actions/postsActions"
import { deletePost } from "../actions/postsActions"
import { deleteAllPosts } from "../actions/postsActions"

//try to use single source
// import postAction from "../actions/postsActions"

@connect((store) => {
	return {
		posts: store.posts.posts,
		postsFetched: store.posts.fetched
	};
})
export default class BlogContainer extends React.Component {
	// componentWillMount() {
	// 	this.props.dispatch(fetchPosts())
	// }
	fetchPosts() { 
		this.props.dispatch(fetchPosts())
	}

	fetchPost() { 
		this.props.dispatch(fetchPost())
	}

	addPost() {
		this.props.dispatch(addPost())
	}

	updatePost({id, text}) {
		this.props.dispatch(updatePost())
	}

	deletePost() {
		this.props.dispatch(deletePost())
	}

	deleteAllPosts() {
		this.props.dispatch(deleteAllPosts())
	}

	render() {
		// const posts = this.props;

		// if (posts.postsFetched) {
		// 	debugger;
		// 	return <div>
		// 		<button onClick={this.fetchPost.bind(this)}>Load post 101</button>
		// 		<button onClick={this.addPost.bind(this)}>Add post 103</button>
		// 	</div>
		// }

		return <div>
			<button onClick={this.fetchPosts.bind(this)}>Load posts</button>
			<button onClick={this.fetchPost.bind(this)}>Load post 101</button>
			<button onClick={this.addPost.bind(this)}>Add post 103</button>
			<button onClick={this.updatePost.bind(this)}>Update post 103</button>
			<button onClick={this.deletePost.bind(this)}>Delete post 103</button>
			<button onClick={this.deleteAllPosts.bind(this)}>Delete all posts</button>
		</div>

	}
}