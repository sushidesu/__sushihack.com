import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Post } from "../types/data"
import { Layout } from "../components/Layout"
import { Container } from "../components/Container"
import { Article, Tag, TagList } from "../components/Article"

type Props = {
  pageContext: Post
}

const BlogPost: React.FC<Props> = ({ pageContext }) => (
  <Layout>
    <Container>
      <h1>{pageContext.frontmatter.title}</h1>
      <TagList>
        {pageContext.frontmatter.tags?.map((tag, i) => (
          <Tag key={i}>{tag}</Tag>
        ))}
      </TagList>
      <Article>
        <MDXRenderer>{pageContext.body}</MDXRenderer>
      </Article>
    </Container>
  </Layout>
)

export default BlogPost
