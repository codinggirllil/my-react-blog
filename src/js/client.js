import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"

import BlogContainer from "./components/BlogContainer"
import store from "./store"

const app = document.getElementById('app')

ReactDOM.render(<Provider store={store}>
	<BlogContainer />
</Provider>, app);
