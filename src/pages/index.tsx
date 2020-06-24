import React from "react"
import { graphql, Link } from "gatsby"
import { SiteData } from "../types/data"
import { relativeURL } from "../utils"

type Props = {
  data: SiteData
}

const Index: React.FC<Props> = ({ data }) => (
  <div>
    <h1>sushihack.com</h1>
    <ul>
      {data.allContentfulPost.edges.map(({ node }) => (
        <li key={node.id}>
          <Link to={relativeURL("post", node.slug)}>{node.title}</Link>
        </li>
      ))}
    </ul>
  </div>
)

export const query = graphql`
  {
    allContentfulPost {
      edges {
        node {
          id
          title
          slug
        }
      }
    }
  }
`

export default Index
