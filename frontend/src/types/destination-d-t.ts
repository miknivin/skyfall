import { StaticImageData } from 'next/image';

export interface IDestinationDT {
  id: number;
  image: StaticImageData;
  title: string;
  tourCount: number;
  departuresCount?: number;
  detailsImg: StaticImageData;
}
