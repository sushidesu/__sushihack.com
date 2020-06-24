export type Post = {
  id: string

  slug: string
  title: string
  body: {
    body: string
    childMarkdownRemark: {
      html: string
    }
  }
  tags: Array<Tag>
}

export type Tag = {
  id: string
  name: string
}

export type SiteData = {
  allContentfulPost: {
    totalCount: number
    edges: {
      node: Post
    }[]
  }
}
