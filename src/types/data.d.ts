import { ReactNode } from "react"

export type Post = {
  id: string
  body: string

  frontmatter: {
    title: string
    slug: string
    tags: Array<string>
    categories: Array<string>
    published_at: string
  }
}

export type SiteData = {
  allMdx: {
    totalCount: number
    edges: {
      node: Post
    }[]
  }
}
