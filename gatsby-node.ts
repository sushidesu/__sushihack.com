import path from "path"
import { GatsbyNode } from "gatsby"
import { Post, SiteData } from "./src/types/data"
import { relativeURL } from "./src/utils"

const query = `
  {
    allContentfulPost {
      edges {
        node {
          slug
          title
          body {
            body
            childMarkdownRemark {
              html
            }
          }
          tags {
            id
            name
          }
        }
      }
    }
  }
`

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
}) => {
  const { createPage } = actions

  const result = await graphql<SiteData>(query)

  if (result.errors || !result.data) {
    throw result.errors
  }

  result.data.allContentfulPost.edges.forEach(({ node }) => {
    createPage<Post>({
      path: relativeURL("post", node.slug),
      component: path.resolve("./src/templates/BlogPost.tsx"),
      context: node,
    })
  })
}
