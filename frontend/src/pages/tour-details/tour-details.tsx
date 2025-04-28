"use client";

import Breadcrumb from "@/components/breadcrumb/breadcrumb";
import TourDetailsArea from "@/components/tour/details/tour-details-area";
import FooterOne from "@/layouts/footers/footer-one";
import HeaderTwo from "@/layouts/headers/header-two";
import Wrapper from "@/layouts/wrapper";
import { useGetResortByIdQuery } from "@/redux/api/resortApi";
import { IResort } from "@/types/resort";

interface TourDetailsProps {
  id: string;
}

const TourDetailsMain = ({ id }: TourDetailsProps) => {
  const { data, isLoading, isError, error } = useGetResortByIdQuery(id);
  const resort: IResort | undefined = data?.data;

  if (isLoading) {
    return (
      <Wrapper>
        <HeaderTwo />
        <main>
          <Breadcrumb title="Loading..." subtitle="Resort" />
          <div className="text-center pt-100">Loading...</div>
        </main>
        <FooterOne />
      </Wrapper>
    );
  }

  if (isError || !resort) {
    return (
      <Wrapper>
        <HeaderTwo />
        <main>
          <Breadcrumb title="Error" subtitle="Resort" />
          <div className="text-center pt-100">
            {isError
              ? `Error: ${
                  (error as any)?.data?.message || "Failed to fetch resort"
                }`
              : `Resort not found with id: ${id}`}
          </div>
        </main>
        <FooterOne />
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <HeaderTwo />
      <main>
        <Breadcrumb title={resort.name} subtitle="Resort" />
        <TourDetailsArea resort={resort} />
      </main>
      <FooterOne />
    </Wrapper>
  );
};

export default TourDetailsMain;
