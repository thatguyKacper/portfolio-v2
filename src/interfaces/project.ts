import { type BlocksContent } from '@strapi/blocks-react-renderer'
import type { Category } from './category'
import type { Client } from './client'
export default interface Project {
  name: string
  slug: string
  description: BlocksContent
  url: string
  image: Image
  category: Category[]
  client: Client[]
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
