import { StaticImageData } from "next/image";

export interface ITourDT {
  id: number | string;
  image: StaticImageData | string;
  title: string;
  price: number;
  badgeTitle?: string;
  isFeature?: boolean;
  address: string;
  rating: string;
  review: string;
  duration: number;
  travelerCount: number;
  detailsImg: StaticImageData;
  description?: string;
  progresses: {
    title: string;
    value: string;
  }[];
  btnText: string;
  checkIn?: string;
}
