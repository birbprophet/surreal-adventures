import React from "react"
import { Link } from "gatsby"

import PageWrapper from "../components/core/PageWrapper"
import Image from "../components/images/AstronautImage"
import SEO from "../components/core/seo"

const IndexPage = () => (
  <PageWrapper>
    <SEO title="C" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </PageWrapper>
)

export default IndexPage
