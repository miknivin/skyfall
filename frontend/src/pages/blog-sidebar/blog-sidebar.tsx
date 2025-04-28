import BlogSidebarArea from '@/components/blog/blog-sidebar/blog-sidebar-area';
import Breadcrumb from '@/components/breadcrumb/breadcrumb';
import FooterOne from '@/layouts/footers/footer-one';
import HeaderTwo from '@/layouts/headers/header-two';
import Wrapper from '@/layouts/wrapper';

const BlogSidebarMain = () => {
  return (
    <Wrapper>
      <HeaderTwo />
      <main>
        <Breadcrumb title="Blog Sidebar" subtitle="Blog" />

        <BlogSidebarArea />
      </main>

      <FooterOne />
    </Wrapper>
  );
};
export default BlogSidebarMain;
