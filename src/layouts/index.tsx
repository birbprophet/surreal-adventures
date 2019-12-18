import React from "react"

import "typeface-roboto"
import "../css/fonts.css"
import "../css/tailwind.css"

interface IProps {
  children?: any
  pageContext?: any
}

const Component: React.FC<IProps> = ({ children, pageContext }) => {
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
      <h1>other layout</h1>
      {children}
    </div>
  )
}

export default Component
