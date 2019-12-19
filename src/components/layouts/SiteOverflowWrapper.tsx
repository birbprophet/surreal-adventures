import React, { useEffect } from "react"
import { SiteState } from "../../stores/siteState"

interface IProps {
  children?: any
}
const ReactComponent: React.FC<IProps> = ({ children }) => {
  let { siteState } = SiteState.useContainer()
  const { menuOpen } = siteState

  return (
    <div className={"overflow-x-hidden " + menuOpen ? "overflow-y-hidden" : ""}>
      {children}
    </div>
  )
}

export default ReactComponent
