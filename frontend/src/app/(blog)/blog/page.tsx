import { Metadata } from 'next';
import BlogMain from '@/pages/blog/blog';

export const metadata: Metadata = {
  title: 'Travello - Blog Page',
};

const BlogPage = () => {
  return <BlogMain />;
};

export default BlogPage;
