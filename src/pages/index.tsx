import React from "react"
import { Link, graphql } from "gatsby"

import StyleWrapper from "../components/core/StyleWrapper"
import AstronautImage from "../components/images/AstronautImage"
import SEO from "../components/core/SEOElement"
import { useFirebase } from "gatsby-plugin-firebase"

const HomePage: React.FC<IProps> = ({ data }) => {
  useFirebase(firebase => {
    firebase.analytics().logEvent("visited_home_page")
  }, [])
  return (
    <StyleWrapper>
      <SEO title="Home" />
      <h1>{data.datoCmsHomePage.title}</h1>
      <p>{data.datoCmsHomePage.description}</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <AstronautImage />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </StyleWrapper>
  )
}
export default HomePage

export const query = graphql`
  query HomePageQuery {
    datoCmsHomePage {
      description
      title
    }
  }
`

export interface IProps {
  data: IData
}

export interface IData {
  datoCmsHomePage: IDatoCmsHomePage
}

export interface IDatoCmsHomePage {
  description: string
  title: string
}
