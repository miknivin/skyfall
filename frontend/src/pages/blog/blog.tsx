import BlogArea from '@/components/blog/blog-area';
import Breadcrumb from '@/components/breadcrumb/breadcrumb';
import FooterOne from '@/layouts/footers/footer-one';
import HeaderTwo from '@/layouts/headers/header-two';
import Wrapper from '@/layouts/wrapper';

const BlogMain = () => {
  return (
    <Wrapper>
      <HeaderTwo />
      <main>
        <Breadcrumb title="Blog Standard" subtitle="Blog" />

        <BlogArea />

      </main>

      <FooterOne />
    </Wrapper>
  );
};
export default BlogMain;
