import React, { useState } from "react"
import { useUser } from "../hooks"

export default props => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const { login } = useUser()

  function handleLogin(e) {
    e.preventDefault()

    login(username, password)
  }

  return (
    <div>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}
