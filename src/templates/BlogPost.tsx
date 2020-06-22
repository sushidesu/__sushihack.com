import React from "react"
import { Post } from "../types/data"

type Props = {
  pageContext: Post
}

const BlogPost: React.FC<Props> = ({ pageContext }) => (
  <div>
    <h1>{pageContext.title}</h1>
    <p>
      <time>{pageContext.createdAt}</time>
    </p>
    <p>
      {pageContext.tags.map(tag => (
        <span key={tag.id}>{tag.name}, </span>
      ))}
    </p>
    <p>{pageContext.body}</p>
  </div>
)

export default BlogPost
