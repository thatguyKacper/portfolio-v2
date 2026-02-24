import type Project from './project'

export default interface Category {
  name: string
  slug: string
  projects: Project[]
}
