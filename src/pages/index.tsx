import React from "react"
import { graphql } from "gatsby"
import { SiteData } from "../types/data"

type Props = {
  data: SiteData
}

const Index: React.FC<Props> = ({ data }) => (
  <div>
    <h1>sushihack.com</h1>
    <ul>
      {data.allMicrocmsPosts.edges.map(({ node }) => (
        <li key={node.id}>{node.title}</li>
      ))}
    </ul>
  </div>
)

export const query = graphql`
  {
    allMicrocmsPosts {
      edges {
        node {
          id
          title
          body
        }
      }
    }
  }
`

export default Index
