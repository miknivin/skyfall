import { StaticImageData } from 'next/image';

export interface IDestinationDT {
  id: number;
  name?:string;
  image: StaticImageData;
  title: string;
  tourCount: number;
  departuresCount?: number;
  detailsImg: StaticImageData;
}
