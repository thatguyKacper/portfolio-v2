export default interface Post {
    id: number;
    slug: string;
    link: string;
    title: {
        rendered: string;
    };
    excerpt: {
        rendered: string;
    }
}