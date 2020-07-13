import React from "react"
import { graphql, Link } from "gatsby"
import { SiteData } from "../types/data"
import { relativeURL } from "../utils"
import { Layout } from "../components/Layout"

type Props = {
  data: SiteData
}

const Index: React.FC<Props> = ({ data }) => (
  <Layout>
    <h1>recent posts</h1>
    <ul>
      {data.allContentfulPost.edges.map(({ node }) => (
        <li key={node.id}>
          <Link to={relativeURL("post", node.slug)}>{node.title}</Link>
        </li>
      ))}
    </ul>
  </Layout>
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
