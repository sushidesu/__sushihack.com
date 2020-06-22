import path from "path"
import { GatsbyNode } from "gatsby"
import { Post, SiteData } from "./src/types/data"
import { relativeURL } from "./src/utils"

const query = `
  {
    allMicrocmsPosts {
      edges {
        node {
          id
          createdAt
          updatedAt
          slug
          title
          body
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

  result.data.allMicrocmsPosts.edges.forEach(({ node }) => {
    createPage<Post>({
      path: relativeURL("post", node.slug),
      component: path.resolve("./src/templates/BlogPost.tsx"),
      context: node,
    })
  })
}
