import { StaticImageData } from 'next/image';

export interface ITeamDT {
  id: number;
  name: string;
  designation: string;
  image: StaticImageData;
  socials?: {
    platform: string;
    link: string;
  }[];
}
