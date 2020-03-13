import React from "react"
import { Route, Redirect } from "react-router-dom"
import { useUser } from "../hooks"

export default props => {
  const { isAuthenticated } = useUser()

  if (isAuthenticated) {
    return <Route {...props} />
  } else {
    return <Redirect to="/login" />
  }
}
