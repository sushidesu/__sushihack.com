type Type = "post"

export const relativeURL = (type: Type, slug: string): string =>
  `/${type}/${slug}`
