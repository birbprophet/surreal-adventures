import React from "react"
import { Link, graphql } from "gatsby"
import { useFirebase } from "gatsby-plugin-firebase"

import SEO from "../components/core/SEOElement"

const HomePage: React.FC<IProps> = ({ data }) => {
  useFirebase((firebase: any) => {
    firebase.analytics().logEvent("visited_home_page")
  }, [])

  return (
    <>
      <SEO title="Home" />
      <h1>{data.datoCmsHomePage.title}</h1>
      <p>{data.datoCmsHomePage.description}</p>
      <p>Now go build something great.</p>

      <Link to="/page-2/">Go to page 2</Link>
    </>
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
