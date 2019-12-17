import React from "react"
import { Link, graphql } from "gatsby"

import PageWrapper from "../components/core/StyleWrapper"
import { useFirebase } from "gatsby-plugin-firebase"

interface IProps {
  path?: any
}

const Page: React.FC<IProps> = () => {
  useFirebase(firebase => {
    firebase.analytics().logEvent("visited_home_page")
  }, [])
  return (
    <PageWrapper>
      <h1>test</h1>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
      <Link to="/page-2/">Go to page 2</Link>
    </PageWrapper>
  )
}
export default Page
