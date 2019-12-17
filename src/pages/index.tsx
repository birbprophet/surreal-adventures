import React from "react"
import { Link, graphql } from "gatsby"

import PageWrapper from "../components/core/PageWrapper"
import Image from "../components/images/AstronautImage"
import SEO from "../components/core/seo"

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

const HomePage: React.FC<IProps> = ({ data }) => (
  <PageWrapper>
    <SEO title="Home" />
    <h1>{data.datoCmsHomePage.title}</h1>
    <p>{data.datoCmsHomePage.description}</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </PageWrapper>
)

export default HomePage

export const query = graphql`
  query HomePageQuery {
    datoCmsHomePage {
      description
      title
    }
  }
`
