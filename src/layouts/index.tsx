import React, { useEffect } from "react"

import LogRocket from "logrocket"

import "typeface-roboto"
import "typeface-asap"
import "../css/fonts.css"
import "../css/tailwind.css"
import "../css/typist.css"

import SiteHeader from "../components/layouts/SiteHeader"
import { SiteState } from "../stores/siteState"

interface IProps {
  children?: any
  pageContext?: any
}

const SiteComponent: React.FC<IProps> = ({ children }) => {
  let { siteState } = SiteState.useContainer()
  const { menuOpen } = siteState

  return <div className={menuOpen ? "hidden" : ""}>{children}</div>
}

const ReactComponent: React.FC<IProps> = ({ children, pageContext }) => {
  useEffect(() => {
    import("../services/firebase").then(({ firebaseapp, auth }) => {
      firebaseapp.analytics().logEvent("visited_home_page")
      if (auth.currentUser && auth?.currentUser?.email) {
        LogRocket.identify(auth.currentUser.email)
      }
    })
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
    <SiteState.Provider>
      <SiteHeader />
      <SiteComponent children={children} />
    </SiteState.Provider>
  )
}

export default ReactComponent
