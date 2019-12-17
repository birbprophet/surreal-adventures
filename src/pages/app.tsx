import React from "react"
import { Router } from "@reach/router"
import Profile from "../app/AppProfile"
import Login from "../app/AppLogin"

const App = () => {
  return (
    <Router>
      <Profile path="/app/profile" />
      <Login path="/app/login" />
    </Router>
  )
}
export default App
