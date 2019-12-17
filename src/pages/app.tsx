import React from "react"
import { Router } from "@reach/router"
import Profile from "../app/AppProfile"
import PrivateRoute from "../components/core/PrivateRoute"

const App = () => {
  return (
    <Router>
      <PrivateRoute path="/app/profile" component={Profile} />
    </Router>
  )
}
export default App
