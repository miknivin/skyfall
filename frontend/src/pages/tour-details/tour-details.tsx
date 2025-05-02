"use client";

import Breadcrumb from "@/components/breadcrumb/breadcrumb";
import TourDetailsArea from "@/components/tour/details/tour-details-area";
import FooterOne from "@/layouts/footers/footer-one";
import HeaderOne from "@/layouts/headers/header-one";
import HeaderTwo from "@/layouts/headers/header-two";
import Wrapper from "@/layouts/wrapper";

interface TourDetailsProps {
  id: string;
}

const TourDetailsMain = ({ id }: TourDetailsProps) => {
  return (
    <Wrapper>
      <HeaderOne />
      <main>
        <Breadcrumb title="Resort Details" subtitle="Resort" />
        <TourDetailsArea id={id} />
      </main>
      <FooterOne />
    </Wrapper>
  );
};

export default TourDetailsMain;
