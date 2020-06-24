import React from "react"
import { Post } from "../types/data"

type Props = {
  pageContext: Post
}

const BlogPost: React.FC<Props> = ({ pageContext }) => (
  <div>
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
  </div>
)

export default BlogPost
