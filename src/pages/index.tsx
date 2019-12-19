import React from "react"
import { Link, graphql } from "gatsby"

import SEO from "../components/core/SEOElement"

const ReactComponent: React.FC<IProps> = ({ data }) => {
  return (
    <>
      <SEO title="Home" lang="en" meta={[]} />
      <h1>{data.datoCmsHomePage.title}</h1>
      <p>{data.datoCmsHomePage.description}</p>
      <div className="overflow-auto">
        <p>Now go build something great.</p>
        <p>
          Now go build something great.
          <br />
        </p>
        <p>
          Now go build something great.
          <br />
        </p>
        <p>
          Now go build something great.
          <br />
        </p>
        <p>
          Now go build something great.
          <br />
        </p>
        <p>
          Now go build something great.
          <br />
        </p>
        <p>
          Now go build something great.
          <br />
        </p>
        <p>
          Now go build something great.
          <br />
        </p>
        <p>
          Now go build something great.
          <br />
        </p>
        <p>
          Now go build something great.
          <br />
        </p>
        <p>
          Now go build something great.
          <br />
        </p>
        <p>
          Now go build something great.
          <br />
        </p>
        <p>
          Now go build something great.
          <br />
        </p>
        <p>
          Now go build something great.
          <br />
        </p>
        <p>
          Now go build something great.
          <br />
        </p>
        <p>
          Now go build something great.
          <br />
        </p>
        <p>
          Now go build something great.
          <br />
        </p>
        <p>
          Now go build something great.
          <br />
        </p>
        <p>
          Now go build something great.
          <br />
        </p>
        <p>
          Now go build something great.
          <br />
        </p>
        <p>
          Now go build something great.
          <br />
        </p>
        <p>
          Now go build something great.
          <br />
        </p>
        <p>
          Now go build something great.
          <br />
        </p>
        <p>
          Now go build something great.
          <br />
        </p>
        <p>
          Now go build something great.
          <br />
        </p>
      </div>

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
