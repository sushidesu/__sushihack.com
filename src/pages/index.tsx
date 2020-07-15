import React from "react"
import { graphql, Link } from "gatsby"
import { SiteData } from "../types/data"
import { relativeURL } from "../utils"
import { Layout } from "../components/Layout"
import { Container } from "../components/Container"

type Props = {
  data: SiteData
}

const Index: React.FC<Props> = ({ data }) => (
  <Layout>
    <Container>
      <h1>Recent Posts</h1>
      <ul>
        {data.allMdx.edges.map(({ node }) => (
          <li key={node.id}>
            <Link to={relativeURL("post", node.frontmatter.slug)}>
              {node.frontmatter.title}
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  </Layout>
)

export const query = graphql`
  {
    allMdx {
      edges {
        node {
          id
          frontmatter {
            title
            slug
          }
        }
      }
    }
  }
`

export default Index
