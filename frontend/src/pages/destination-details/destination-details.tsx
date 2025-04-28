import Breadcrumb from '@/components/breadcrumb/breadcrumb';
import DestinationDetailsArea from '@/components/destination/destination-details/destination-details-area';
import FooterOne from '@/layouts/footers/footer-one';
import HeaderTwo from '@/layouts/headers/header-two';
import Wrapper from '@/layouts/wrapper';
import { IDestinationDT } from '@/types/destination-d-t';

interface DestinationDetailsProps {
  destination: IDestinationDT;
}

const DestinationDetailsMain = ({ destination }: DestinationDetailsProps) => {
  return (
    <Wrapper>
      <HeaderTwo />
      <main>
        <Breadcrumb title={destination?.title} subtitle="Destination" />

        <DestinationDetailsArea destination={destination} />
      </main>

      <FooterOne />
    </Wrapper>
  );
};
export default DestinationDetailsMain;
