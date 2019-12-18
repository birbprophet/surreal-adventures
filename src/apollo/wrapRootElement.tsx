import React from "react"
import { ApolloProvider } from "@apollo/react-hooks"
import { client } from "./client"

interface IProps {
  element: any
}
export const wrapRootElement: React.FC<IProps> = ({ element }) => (
  <ApolloProvider client={client}>{element}</ApolloProvider>
)
