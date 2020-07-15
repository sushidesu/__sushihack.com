import React from "react"
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
      <h1>{pageContext.title}</h1>
      <TagList>
        {pageContext.tags?.map(tag => (
          <Tag key={tag.id}>{tag.name}</Tag>
        ))}
      </TagList>
      <Article
        dangerouslySetInnerHTML={{
          __html: pageContext.body.childMarkdownRemark.html,
        }}
      />
    </Container>
  </Layout>
)

export default BlogPost
