import { StaticImageData } from 'next/image';

export interface IBlogDT {
  id: number;
  image: StaticImageData;
  badgeTitle?: string;
  title: string;
  publishedDate: string;
  blogAuthor?: string;
  blogText?: string;
  detailsImg: StaticImageData;
  commentCount: string;
  description?: string;
  btnText?: string;
}
