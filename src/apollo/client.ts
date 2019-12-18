import ApolloClient from "apollo-boost"
import fetch from "isomorphic-fetch"

export const client = new ApolloClient({
  uri: "https://surreal-adventures.herokuapp.com/v1/graphql",
  fetch,
})
