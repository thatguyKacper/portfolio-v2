import type Project from './project'

export default interface Client {
  name: string
  slug: string
  website?: string
  image?: Image
  projects: Project[]
}

interface Image {
  name: string
  formats: {
    small: {
      name: string
      url: string
    }
  }
  url: string
}
