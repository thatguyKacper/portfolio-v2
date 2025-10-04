import { type BlocksContent } from '@strapi/blocks-react-renderer';


export default interface Project {
    id: number;
    slug: string;
    title: string;
    description: BlocksContent;
    image: any;
    url: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}