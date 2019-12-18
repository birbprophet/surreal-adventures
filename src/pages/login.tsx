import React from "react"

import { useAuthState } from "react-firebase-hooks/auth"
import { auth, googleProvider } from "../services/firebase"

interface IProps {
  path?: any
}

const CurrentUser: React.FC<IProps> = () => {
  const [user, initialising, error] = useAuthState(auth)
  const login = () => {
    auth.signInWithRedirect(googleProvider)
  }
  const logout = () => {
    auth.signOut()
  }

  if (initialising) {
    return (
      <div>
        <p>Initialising User...</p>
      </div>
    )
  }
  if (error) {
    return (
      <div>
        <p>Error: {error}</p>
      </div>
    )
  }
  if (user) {
    return (
      <div>
        <p>Current User: {user.email}</p>
        <button onClick={logout}>Log out</button>
      </div>
    )
  }
  return <button onClick={login}>Log in</button>
}

export default CurrentUser
