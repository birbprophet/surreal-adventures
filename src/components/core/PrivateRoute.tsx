import React, { Component } from "react"
import { navigate } from "gatsby"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../../services/firebase"

interface IProps {
  component?: any
  location?: any
  path?: any
}

const PrivateRoute: React.FC<IProps> = ({
  component: Component,
  location,
  ...props
}) => {
  const [user, initialising, error] = useAuthState(auth)
  if (!initialising && !user && location.pathname !== `/login`) {
    navigate("/login")
    return null
  }
  return <Component {...props} />
}
export default PrivateRoute
