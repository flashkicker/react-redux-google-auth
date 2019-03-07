import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import Header from "./Header"

const App = () => {
	return (
		<div className="ui container">
			<BrowserRouter>
				<div>
					<Header />
					<Route path="/" exact />
				</div>
			</BrowserRouter>
		</div>
	)
}

export default App
