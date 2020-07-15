import path from "path"
import { GatsbyNode } from "gatsby"
import { Post, SiteData } from "./src/types/data"
import { relativeURL } from "./src/utils"

const query = `
  {
    allMdx {
      edges {
        node {
          id
          body
          frontmatter {
            title
            slug
            tags
            categories
            published_at
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

  result.data.allMdx.edges.forEach(({ node }) => {
    createPage<Post>({
      path: relativeURL("post", node.frontmatter.slug),
      component: path.resolve("./src/templates/BlogPost.tsx"),
      context: node,
    })
  })
}
