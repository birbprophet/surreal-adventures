import React from "react"
import { Link, graphql } from "gatsby"

import { Lottie, ReactLottieConfig } from "@crello/react-lottie"
import SurrealUndrawDreamer from "../assets/animations/SurrealUndrawDreamer"

import SEO from "../components/core/SEOElement"

const ReactComponent: React.FC<IProps> = ({ data }) => {
  return (
    <>
      <SEO title="Home" lang="en" meta={[]} />
      <h1>{data.datoCmsHomePage.title}</h1>
      <p>{data.datoCmsHomePage.description}</p>

      <SurrealUndrawDreamer />

      <Link to="/page-2/">Go to page 2</Link>
    </>
  )
}
export default ReactComponent

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
