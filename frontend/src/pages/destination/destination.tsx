import Breadcrumb from '@/components/breadcrumb/breadcrumb';
import DestinationArea from '@/components/destination/destination-area';
import FooterOne from '@/layouts/footers/footer-one';
import HeaderTwo from '@/layouts/headers/header-two';
import Wrapper from '@/layouts/wrapper';

const DestinationMain = () => {
  return (
    <Wrapper>
      <HeaderTwo />
      <main>
        <Breadcrumb title="Destination" />

        <DestinationArea />

      </main>
      <FooterOne />
    </Wrapper>
  );
};
export default DestinationMain;
