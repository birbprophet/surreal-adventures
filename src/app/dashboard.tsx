import React from "react"
import { Link, graphql } from "gatsby"

interface IProps {
  path?: any
}

const Page: React.FC<IProps> = () => {
  return (
    <>
      <h1>test</h1>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
      <Link to="/page-2/">Go to page 2</Link>
    </>
  )
}
export default Page
