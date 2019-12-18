import React, { useEffect } from "react"
import SiteHeader from "../components/layouts/SiteHeader"
import { firebaseapp } from "../services/firebase"

import "typeface-roboto"
import "typeface-asap"
import "../css/fonts.css"
import "../css/tailwind.css"
import "../css/typist.css"

interface IProps {
  children?: any
  pageContext?: any
}

const ReactComponent: React.FC<IProps> = ({ children, pageContext }) => {
  useEffect(() => {
    firebaseapp.analytics()
  }, [])

  if (pageContext.layout === "login") {
    return (
      <>
        <h1>login layout</h1>
        {children}
      </>
    )
  } else if (pageContext.layout === "app") {
    return (
      <>
        <h1>app layout</h1>
        {children}
      </>
    )
  }
  return (
    <>
      <SiteHeader />
      {children}
    </>
  )
}

export default ReactComponent
