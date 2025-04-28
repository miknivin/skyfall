import Breadcrumb from '@/components/breadcrumb/breadcrumb';
import CompareArea from '@/components/compare/compare-area';
import FooterOne from '@/layouts/footers/footer-one';
import HeaderTwo from '@/layouts/headers/header-two';
import Wrapper from '@/layouts/wrapper';

const CompareMain = () => {
  return (
    <Wrapper>
      <HeaderTwo />
      <main>
        <Breadcrumb title="Compare" />

        <CompareArea />

      </main>

      <FooterOne />
    </Wrapper>
  );
};
export default CompareMain;
