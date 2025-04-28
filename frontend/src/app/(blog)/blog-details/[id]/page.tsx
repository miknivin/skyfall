import { Metadata } from 'next';
import { blogData } from '@/data/blog-data';
import BlogDetailsMain from '@/pages/blog-details/blog-details';

export const metadata: Metadata = {
  title: 'Travello - Blog Details Page',
};

export default function BlogDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const blog = blogData.find((blog) => blog.id === Number(params.id));
  return blog ? (
    <BlogDetailsMain blog={blog} />
  ) : (
    <div className="text-center pt-100">
      Blog not found with id: {params.id}
    </div>
  );
}
