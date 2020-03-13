import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import UserRoute from "../lib/UserRoute.js"

import Login from "./Login"
import Register from "./Register"

export default props => {
  return (
    <Router>
      <div>
        <Route path="/login" component={Login} />
        <UserRoute path="/" component={Register} />
      </div>
    </Router>
  )
}
