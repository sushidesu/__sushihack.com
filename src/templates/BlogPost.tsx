import React from "react"
import { Post } from "../types/data"
import { Layout } from "../components/Layout"

type Props = {
  pageContext: Post
}

const BlogPost: React.FC<Props> = ({ pageContext }) => (
  <Layout>
    <h1>{pageContext.title}</h1>
    <p>
      {pageContext.tags.map(tag => (
        <span key={tag.id}>{tag.name}, </span>
      ))}
    </p>
    <section
      dangerouslySetInnerHTML={{
        __html: pageContext.body.childMarkdownRemark.html,
      }}
    />
  </Layout>
)

export default BlogPost
