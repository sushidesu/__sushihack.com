export type Post = {
  id: string
  createdAt: string
  updatedAt: string

  slug: string
  title: string
  body: string
  tags: Array<Tag>
}

export type Tag = {
  id: string
  name: string
}

export type SiteData = {
  allMicrocmsPosts: {
    totalCount: number
    edges: {
      node: Post
    }[]
  }
}
