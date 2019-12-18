import React from "react"
import SiteHeader from "../components/layouts/SiteHeader"

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
  if (pageContext.layout === "login") {
    return (
      <div>
        <h1>login layout</h1>
        {children}
      </div>
    )
  } else if (pageContext.layout === "app") {
    return (
      <div>
        <h1>app layout</h1>
        {children}
      </div>
    )
  }
  return (
    <div>
      <SiteHeader />
      {children}
    </div>
  )
}

export default ReactComponent
