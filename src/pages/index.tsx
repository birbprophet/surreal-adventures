import React from "react"
import { graphql } from "gatsby"

import IndexSectionOne from "../sections/IndexSectionOne"
import IndexSectionTwo from "../sections/IndexSectionTwo"

import SEO from "../components/core/SEOElement"

const ReactComponent: React.FC<IProps> = ({ data }) => {
  return (
    <>
      <SEO
        title={data.datoCmsHomePage.title}
        description={data.datoCmsHomePage.description}
        lang="en"
        meta={[]}
      />

      <IndexSectionOne />
      <IndexSectionTwo />
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
