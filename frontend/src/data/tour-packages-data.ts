import { ITourDT } from '@/types/tour-packages-d-t';

import detailsImg from '@/assets/img/inner-page/discover/discover-1.jpg';
import packageImg1 from '@/assets/img/home-1/featured/img/img-1.jpg';
import packageImg2 from '@/assets/img/home-1/featured/img/img-2.jpg';
import packageImg3 from '@/assets/img/home-1/featured/img/img-3.jpg';
import packageImg4 from '@/assets/img/home-2/featured/thumb/f-2-1.jpg';
import packageImg5 from '@/assets/img/home-2/featured/thumb/f-2-2.jpg';
import packageImg6 from '@/assets/img/home-2/featured/thumb/f-2-3.jpg';
import packageImg7 from '@/assets/img/home-2/featured/thumb/f-2-4.jpg';
import packageImg8 from '@/assets/img/home-4/destination/d-4-1.jpg';
import packageImg9 from '@/assets/img/home-4/destination/d-4-2.jpg';
import packageImg10 from '@/assets/img/home-4/destination/d-4-3.jpg';
import packageImg11 from '@/assets/img/home-4/destination/d-4-4.jpg';
import packageImg12 from '@/assets/img/home-4/destination/d-4-5.jpg';
import packageImg13 from '@/assets/img/home-4/destination/d-4-6.jpg';

export const tourPackagesDataOne: ITourDT[] = [
  {
    id: 1,
    image: packageImg1,
    title: 'Cuba Sailing Adventure',
    price: 233,
    badgeTitle: '10%',
    address: 'traford Park Lexington,40507',
    rating: '4.8',
    review: '1.6',
    duration: 5,
    travelerCount: 15,
    detailsImg: detailsImg,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. At volutpat diam ut venenatis tellus in metus. Sem et tortor
                    consequat id porta. Et malesuada fames ac turpis egestas sed. Condimentum vitae sapien
                    pellentesque habitant morbi tristique senectus et. Cras semper auctor neque vitae. Turpis in eu
                    mi bibendum neque. Pellentesque habitant morbi tristique senectus et netus. Ut morbi tincidunt
                    augue interdum velit euismod. At in tellus integer feugiat scelerisque varius morbi. Ultrices
                    neque ornare aenean euismod. Imperdiet proin fermentum leo`,
    progresses: [
      { title: 'Service', value: '98%' },
      { title: 'Accommodation', value: '92%' },
      { title: 'Location', value: '80%' },
      { title: 'Price', value: '72%' },
    ],
    btnText: 'Explore more',
  },
  {
    id: 2,
    image: packageImg2,
    title: 'Tour in New York',
    price: 249,
    isFeature: true,
    address: 'new your city, 22054',
    rating: '4.9',
    review: '2.4',
    duration: 7,
    travelerCount: 25,
    detailsImg: detailsImg,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. At volutpat diam ut venenatis tellus in metus. Sem et tortor
                    consequat id porta. Et malesuada fames ac turpis egestas sed. Condimentum vitae sapien
                    pellentesque habitant morbi tristique senectus et. Cras semper auctor neque vitae. Turpis in eu
                    mi bibendum neque. Pellentesque habitant morbi tristique senectus et netus. Ut morbi tincidunt
                    augue interdum velit euismod. At in tellus integer feugiat scelerisque varius morbi. Ultrices
                    neque ornare aenean euismod. Imperdiet proin fermentum leo`,
    progresses: [
      { title: 'Service', value: '90%' },
      { title: 'Accommodation', value: '95%' },
      { title: 'Location', value: '80%' },
      { title: 'Price', value: '92%' },
    ],
    btnText: 'Explore more',
  },
  {
    id: 3,
    image: packageImg3,
    title: 'Museum of Modern Art',
    price: 299,
    badgeTitle: '12%',
    address: 'Alfred avenue London,50607',
    rating: '4.6',
    review: '1.3',
    duration: 3,
    travelerCount: 20,
    detailsImg: detailsImg,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. At volutpat diam ut venenatis tellus in metus. Sem et tortor
                    consequat id porta. Et malesuada fames ac turpis egestas sed. Condimentum vitae sapien
                    pellentesque habitant morbi tristique senectus et. Cras semper auctor neque vitae. Turpis in eu
                    mi bibendum neque. Pellentesque habitant morbi tristique senectus et netus. Ut morbi tincidunt
                    augue interdum velit euismod. At in tellus integer feugiat scelerisque varius morbi. Ultrices
                    neque ornare aenean euismod. Imperdiet proin fermentum leo`,
    progresses: [
      { title: 'Service', value: '90%' },
      { title: 'Accommodation', value: '95%' },
      { title: 'Location', value: '80%' },
      { title: 'Price', value: '92%' },
    ],
    btnText: 'Explore more',
  },
];

export const tourPackagesDataTwo: ITourDT[] = [
  {
    id: 4,
    image: packageImg4,
    title: 'Cuba Sailing Adventure',
    price: 110,
    badgeTitle: '10%',
    isFeature: true,
    address: 'traford Park Lexington,40507',
    rating: '4.8',
    review: '1.6',
    duration: 5,
    travelerCount: 12,
    detailsImg: detailsImg,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. At volutpat diam ut venenatis tellus in metus. Sem et tortor
                    consequat id porta. Et malesuada fames ac turpis egestas sed. Condimentum vitae sapien
                    pellentesque habitant morbi tristique senectus et. Cras semper auctor neque vitae. Turpis in eu
                    mi bibendum neque. Pellentesque habitant morbi tristique senectus et netus. Ut morbi tincidunt
                    augue interdum velit euismod. At in tellus integer feugiat scelerisque varius morbi. Ultrices
                    neque ornare aenean euismod. Imperdiet proin fermentum leo`,
    progresses: [
      { title: 'Service', value: '80%' },
      { title: 'Accommodation', value: '95%' },
      { title: 'Location', value: '70%' },
      { title: 'Price', value: '92%' },
    ],
    btnText: 'Explore more',
  },
  {
    id: 5,
    image: packageImg5,
    title: 'Tour in New York',
    price: 115,
    badgeTitle: '15%',
    address: 'new your city, 22054',
    rating: '4.9',
    review: '2.4',
    duration: 7,
    travelerCount: 15,
    detailsImg: detailsImg,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. At volutpat diam ut venenatis tellus in metus. Sem et tortor
                    consequat id porta. Et malesuada fames ac turpis egestas sed. Condimentum vitae sapien
                    pellentesque habitant morbi tristique senectus et. Cras semper auctor neque vitae. Turpis in eu
                    mi bibendum neque. Pellentesque habitant morbi tristique senectus et netus. Ut morbi tincidunt
                    augue interdum velit euismod. At in tellus integer feugiat scelerisque varius morbi. Ultrices
                    neque ornare aenean euismod. Imperdiet proin fermentum leo`,
    progresses: [
      { title: 'Service', value: '90%' },
      { title: 'Accommodation', value: '95%' },
      { title: 'Location', value: '80%' },
      { title: 'Price', value: '92%' },
    ],
    btnText: 'Explore more',
  },
  {
    id: 6,
    image: packageImg6,
    title: 'Beach tour in Miami',
    isFeature: true,
    price: 99,
    address: 'new your city, 22054',
    rating: '4.5',
    review: '2.4',
    duration: 3,
    travelerCount: 10,
    detailsImg: detailsImg,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. At volutpat diam ut venenatis tellus in metus. Sem et tortor
                    consequat id porta. Et malesuada fames ac turpis egestas sed. Condimentum vitae sapien
                    pellentesque habitant morbi tristique senectus et. Cras semper auctor neque vitae. Turpis in eu
                    mi bibendum neque. Pellentesque habitant morbi tristique senectus et netus. Ut morbi tincidunt
                    augue interdum velit euismod. At in tellus integer feugiat scelerisque varius morbi. Ultrices
                    neque ornare aenean euismod. Imperdiet proin fermentum leo`,
    progresses: [
      { title: 'Service', value: '90%' },
      { title: 'Accommodation', value: '95%' },
      { title: 'Location', value: '80%' },
      { title: 'Price', value: '92%' },
    ],
    btnText: 'Explore more',
  },
  {
    id: 7,
    image: packageImg7,
    title: 'Cuba Sailing Adventure',
    price: 101,
    badgeTitle: '12%',
    isFeature: true,
    address: 'traford Park Lexington,40507',
    rating: '4.8',
    review: '1.6',
    duration: 5,
    travelerCount: 15,
    detailsImg: detailsImg,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. At volutpat diam ut venenatis tellus in metus. Sem et tortor
                    consequat id porta. Et malesuada fames ac turpis egestas sed. Condimentum vitae sapien
                    pellentesque habitant morbi tristique senectus et. Cras semper auctor neque vitae. Turpis in eu
                    mi bibendum neque. Pellentesque habitant morbi tristique senectus et netus. Ut morbi tincidunt
                    augue interdum velit euismod. At in tellus integer feugiat scelerisque varius morbi. Ultrices
                    neque ornare aenean euismod. Imperdiet proin fermentum leo`,
    progresses: [
      { title: 'Service', value: '90%' },
      { title: 'Accommodation', value: '95%' },
      { title: 'Location', value: '80%' },
      { title: 'Price', value: '92%' },
    ],
    btnText: 'Explore more',
  },
];

export const tourPackagesDataThree: ITourDT[] = [
  {
    id: 8,
    image: packageImg8,
    title: 'Cuba Sailing Adventure',
    price: 101,
    badgeTitle: '12%',
    isFeature: true,
    address: 'traford Park Lexington,40507',
    rating: '4.8',
    review: '1.6',
    duration: 5,
    travelerCount: 15,
    detailsImg: detailsImg,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. At volutpat diam ut venenatis tellus in metus. Sem et tortor
                    consequat id porta. Et malesuada fames ac turpis egestas sed. Condimentum vitae sapien
                    pellentesque habitant morbi tristique senectus et. Cras semper auctor neque vitae. Turpis in eu
                    mi bibendum neque. Pellentesque habitant morbi tristique senectus et netus. Ut morbi tincidunt
                    augue interdum velit euismod. At in tellus integer feugiat scelerisque varius morbi. Ultrices
                    neque ornare aenean euismod. Imperdiet proin fermentum leo`,
    progresses: [
      { title: 'Service', value: '90%' },
      { title: 'Accommodation', value: '95%' },
      { title: 'Location', value: '80%' },
      { title: 'Price', value: '92%' },
    ],
    btnText: 'Explore more',
  },
  {
    id: 9,
    image: packageImg9,
    title: 'Discovery island kayak..',
    price: 181,
    isFeature: true,
    address: 'traford Park Lexington,40507',
    rating: '4.8',
    review: '1.6',
    duration: 2,
    travelerCount: 15,
    detailsImg: detailsImg,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. At volutpat diam ut venenatis tellus in metus. Sem et tortor
                    consequat id porta. Et malesuada fames ac turpis egestas sed. Condimentum vitae sapien
                    pellentesque habitant morbi tristique senectus et. Cras semper auctor neque vitae. Turpis in eu
                    mi bibendum neque. Pellentesque habitant morbi tristique senectus et netus. Ut morbi tincidunt
                    augue interdum velit euismod. At in tellus integer feugiat scelerisque varius morbi. Ultrices
                    neque ornare aenean euismod. Imperdiet proin fermentum leo`,
    progresses: [
      { title: 'Service', value: '90%' },
      { title: 'Accommodation', value: '95%' },
      { title: 'Location', value: '80%' },
      { title: 'Price', value: '92%' },
    ],
    btnText: 'Explore more',
  },
  {
    id: 10,
    image: packageImg10,
    title: 'Beautiful parasailing',
    price: 171,
    badgeTitle: '15%',
    address: 'traford Park Lexington,40507',
    rating: '4.8',
    review: '1.6',
    duration: 3,
    travelerCount: 15,
    detailsImg: detailsImg,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. At volutpat diam ut venenatis tellus in metus. Sem et tortor
                    consequat id porta. Et malesuada fames ac turpis egestas sed. Condimentum vitae sapien
                    pellentesque habitant morbi tristique senectus et. Cras semper auctor neque vitae. Turpis in eu
                    mi bibendum neque. Pellentesque habitant morbi tristique senectus et netus. Ut morbi tincidunt
                    augue interdum velit euismod. At in tellus integer feugiat scelerisque varius morbi. Ultrices
                    neque ornare aenean euismod. Imperdiet proin fermentum leo`,
    progresses: [
      { title: 'Service', value: '90%' },
      { title: 'Accommodation', value: '95%' },
      { title: 'Location', value: '80%' },
      { title: 'Price', value: '92%' },
    ],
    btnText: 'Explore more',
  },
  {
    id: 11,
    image: packageImg11,
    title: 'Sight seeing & taj Mahal..',
    price: 171,
    isFeature: true,
    address: 'traford Park Lexington,40507',
    rating: '4.5',
    review: '1.7',
    duration: 5,
    travelerCount: 15,
    detailsImg: detailsImg,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. At volutpat diam ut venenatis tellus in metus. Sem et tortor
                    consequat id porta. Et malesuada fames ac turpis egestas sed. Condimentum vitae sapien
                    pellentesque habitant morbi tristique senectus et. Cras semper auctor neque vitae. Turpis in eu
                    mi bibendum neque. Pellentesque habitant morbi tristique senectus et netus. Ut morbi tincidunt
                    augue interdum velit euismod. At in tellus integer feugiat scelerisque varius morbi. Ultrices
                    neque ornare aenean euismod. Imperdiet proin fermentum leo`,
    progresses: [
      { title: 'Service', value: '90%' },
      { title: 'Accommodation', value: '95%' },
      { title: 'Location', value: '80%' },
      { title: 'Price', value: '92%' },
    ],
    btnText: 'Explore more',
  },
  {
    id: 12,
    image: packageImg12,
    title: 'Peninsula & Caribbean..',
    price: 151,
    badgeTitle: '12%',
    isFeature: true,
    address: 'traford Park Lexington,40507',
    rating: '4.7',
    review: '1.2',
    duration: 4,
    travelerCount: 15,
    detailsImg: detailsImg,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. At volutpat diam ut venenatis tellus in metus. Sem et tortor
                    consequat id porta. Et malesuada fames ac turpis egestas sed. Condimentum vitae sapien
                    pellentesque habitant morbi tristique senectus et. Cras semper auctor neque vitae. Turpis in eu
                    mi bibendum neque. Pellentesque habitant morbi tristique senectus et netus. Ut morbi tincidunt
                    augue interdum velit euismod. At in tellus integer feugiat scelerisque varius morbi. Ultrices
                    neque ornare aenean euismod. Imperdiet proin fermentum leo`,
    progresses: [
      { title: 'Service', value: '90%' },
      { title: 'Accommodation', value: '95%' },
      { title: 'Location', value: '80%' },
      { title: 'Price', value: '92%' },
    ],
    btnText: 'Explore more',
  },
  {
    id: 13,
    image: packageImg13,
    title: 'Boathouse Neighborhood',
    price: 151,
    badgeTitle: '12%',
    address: 'traford Park Lexington,40507',
    rating: '4.7',
    review: '1.2',
    duration: 8,
    travelerCount: 17,
    detailsImg: detailsImg,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. At volutpat diam ut venenatis tellus in metus. Sem et tortor
                    consequat id porta. Et malesuada fames ac turpis egestas sed. Condimentum vitae sapien
                    pellentesque habitant morbi tristique senectus et. Cras semper auctor neque vitae. Turpis in eu
                    mi bibendum neque. Pellentesque habitant morbi tristique senectus et netus. Ut morbi tincidunt
                    augue interdum velit euismod. At in tellus integer feugiat scelerisque varius morbi. Ultrices
                    neque ornare aenean euismod. Imperdiet proin fermentum leo`,
    progresses: [
      { title: 'Service', value: '90%' },
      { title: 'Accommodation', value: '95%' },
      { title: 'Location', value: '80%' },
      { title: 'Price', value: '92%' },
    ],
    btnText: 'Explore more',
  },
  {
    id: 14,
    image: packageImg13,
    title: 'Cuba Sailing Adventure',
    price: 101,
    badgeTitle: '12%',
    isFeature: true,
    address: 'traford Park Lexington,40507',
    rating: '4.8',
    review: '1.6',
    duration: 5,
    travelerCount: 15,
    detailsImg: detailsImg,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. At volutpat diam ut venenatis tellus in metus. Sem et tortor
                    consequat id porta. Et malesuada fames ac turpis egestas sed. Condimentum vitae sapien
                    pellentesque habitant morbi tristique senectus et. Cras semper auctor neque vitae. Turpis in eu
                    mi bibendum neque. Pellentesque habitant morbi tristique senectus et netus. Ut morbi tincidunt
                    augue interdum velit euismod. At in tellus integer feugiat scelerisque varius morbi. Ultrices
                    neque ornare aenean euismod. Imperdiet proin fermentum leo`,
    progresses: [
      { title: 'Service', value: '90%' },
      { title: 'Accommodation', value: '95%' },
      { title: 'Location', value: '80%' },
      { title: 'Price', value: '92%' },
    ],
    btnText: 'Explore more',
  },
  {
    id: 15,
    image: packageImg12,
    title: 'Discovery island kayak..',
    price: 181,
    isFeature: true,
    address: 'traford Park Lexington,40507',
    rating: '4.8',
    review: '1.6',
    duration: 2,
    travelerCount: 15,
    detailsImg: detailsImg,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. At volutpat diam ut venenatis tellus in metus. Sem et tortor
                    consequat id porta. Et malesuada fames ac turpis egestas sed. Condimentum vitae sapien
                    pellentesque habitant morbi tristique senectus et. Cras semper auctor neque vitae. Turpis in eu
                    mi bibendum neque. Pellentesque habitant morbi tristique senectus et netus. Ut morbi tincidunt
                    augue interdum velit euismod. At in tellus integer feugiat scelerisque varius morbi. Ultrices
                    neque ornare aenean euismod. Imperdiet proin fermentum leo`,
    progresses: [
      { title: 'Service', value: '70%' },
      { title: 'Accommodation', value: '85%' },
      { title: 'Location', value: '90%' },
      { title: 'Price', value: '82%' },
    ],
    btnText: 'Explore more',
  },
  {
    id: 16,
    image: packageImg11,
    title: 'Beautiful parasailing',
    price: 171,
    badgeTitle: '15%',
    address: 'traford Park Lexington,40507',
    rating: '4.8',
    review: '1.6',
    duration: 3,
    travelerCount: 15,
    detailsImg: detailsImg,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. At volutpat diam ut venenatis tellus in metus. Sem et tortor
                    consequat id porta. Et malesuada fames ac turpis egestas sed. Condimentum vitae sapien
                    pellentesque habitant morbi tristique senectus et. Cras semper auctor neque vitae. Turpis in eu
                    mi bibendum neque. Pellentesque habitant morbi tristique senectus et netus. Ut morbi tincidunt
                    augue interdum velit euismod. At in tellus integer feugiat scelerisque varius morbi. Ultrices
                    neque ornare aenean euismod. Imperdiet proin fermentum leo`,
    progresses: [
      { title: 'Service', value: '90%' },
      { title: 'Accommodation', value: '75%' },
      { title: 'Location', value: '80%' },
      { title: 'Price', value: '82%' },
    ],
    btnText: 'Explore more',
  },
  {
    id: 17,
    image: packageImg10,
    title: 'Sight seeing & taj Mahal..',
    price: 171,
    isFeature: true,
    address: 'traford Park Lexington,40507',
    rating: '4.5',
    review: '1.7',
    duration: 5,
    travelerCount: 15,
    detailsImg: detailsImg,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. At volutpat diam ut venenatis tellus in metus. Sem et tortor
                    consequat id porta. Et malesuada fames ac turpis egestas sed. Condimentum vitae sapien
                    pellentesque habitant morbi tristique senectus et. Cras semper auctor neque vitae. Turpis in eu
                    mi bibendum neque. Pellentesque habitant morbi tristique senectus et netus. Ut morbi tincidunt
                    augue interdum velit euismod. At in tellus integer feugiat scelerisque varius morbi. Ultrices
                    neque ornare aenean euismod. Imperdiet proin fermentum leo`,
    progresses: [
      { title: 'Service', value: '90%' },
      { title: 'Accommodation', value: '85%' },
      { title: 'Location', value: '70%' },
      { title: 'Price', value: '92%' },
    ],
    btnText: 'Explore more',
  },
  {
    id: 18,
    image: packageImg9,
    title: 'Peninsula & Caribbean..',
    price: 151,
    badgeTitle: '12%',
    isFeature: true,
    address: 'traford Park Lexington,40507',
    rating: '4.7',
    review: '1.2',
    duration: 4,
    travelerCount: 15,
    detailsImg: detailsImg,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. At volutpat diam ut venenatis tellus in metus. Sem et tortor
                    consequat id porta. Et malesuada fames ac turpis egestas sed. Condimentum vitae sapien
                    pellentesque habitant morbi tristique senectus et. Cras semper auctor neque vitae. Turpis in eu
                    mi bibendum neque. Pellentesque habitant morbi tristique senectus et netus. Ut morbi tincidunt
                    augue interdum velit euismod. At in tellus integer feugiat scelerisque varius morbi. Ultrices
                    neque ornare aenean euismod. Imperdiet proin fermentum leo`,
    progresses: [
      { title: 'Service', value: '90%' },
      { title: 'Accommodation', value: '95%' },
      { title: 'Location', value: '80%' },
      { title: 'Price', value: '92%' },
    ],
    btnText: 'Explore more',
  },
  {
    id: 19,
    image: packageImg8,
    title: 'Boathouse Neighborhood',
    price: 151,
    badgeTitle: '12%',
    address: 'traford Park Lexington,40507',
    rating: '4.7',
    review: '1.2',
    duration: 8,
    travelerCount: 17,
    detailsImg: detailsImg,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. At volutpat diam ut venenatis tellus in metus. Sem et tortor
                    consequat id porta. Et malesuada fames ac turpis egestas sed. Condimentum vitae sapien
                    pellentesque habitant morbi tristique senectus et. Cras semper auctor neque vitae. Turpis in eu
                    mi bibendum neque. Pellentesque habitant morbi tristique senectus et netus. Ut morbi tincidunt
                    augue interdum velit euismod. At in tellus integer feugiat scelerisque varius morbi. Ultrices
                    neque ornare aenean euismod. Imperdiet proin fermentum leo`,
    progresses: [
      { title: 'Service', value: '80%' },
      { title: 'Accommodation', value: '75%' },
      { title: 'Location', value: '85%' },
      { title: 'Price', value: '95%' },
    ],
    btnText: 'Explore more',
  },
  {
    id: 20,
    image: packageImg10,
    title: 'Cuba Sailing Adventure',
    price: 101,
    badgeTitle: '12%',
    isFeature: true,
    address: 'traford Park Lexington,40507',
    rating: '4.8',
    review: '1.6',
    duration: 5,
    travelerCount: 15,
    detailsImg: detailsImg,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. At volutpat diam ut venenatis tellus in metus. Sem et tortor
                    consequat id porta. Et malesuada fames ac turpis egestas sed. Condimentum vitae sapien
                    pellentesque habitant morbi tristique senectus et. Cras semper auctor neque vitae. Turpis in eu
                    mi bibendum neque. Pellentesque habitant morbi tristique senectus et netus. Ut morbi tincidunt
                    augue interdum velit euismod. At in tellus integer feugiat scelerisque varius morbi. Ultrices
                    neque ornare aenean euismod. Imperdiet proin fermentum leo`,
    progresses: [
      { title: 'Service', value: '70%' },
      { title: 'Accommodation', value: '85%' },
      { title: 'Location', value: '80%' },
      { title: 'Price', value: '92%' },
    ],
    btnText: 'Explore more',
  },
  {
    id: 21,
    image: packageImg11,
    title: 'Discovery island kayak..',
    price: 181,
    isFeature: true,
    address: 'traford Park Lexington,40507',
    rating: '4.8',
    review: '1.6',
    duration: 2,
    travelerCount: 15,
    detailsImg: detailsImg,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. At volutpat diam ut venenatis tellus in metus. Sem et tortor
                    consequat id porta. Et malesuada fames ac turpis egestas sed. Condimentum vitae sapien
                    pellentesque habitant morbi tristique senectus et. Cras semper auctor neque vitae. Turpis in eu
                    mi bibendum neque. Pellentesque habitant morbi tristique senectus et netus. Ut morbi tincidunt
                    augue interdum velit euismod. At in tellus integer feugiat scelerisque varius morbi. Ultrices
                    neque ornare aenean euismod. Imperdiet proin fermentum leo`,
    progresses: [
      { title: 'Service', value: '80%' },
      { title: 'Accommodation', value: '95%' },
      { title: 'Location', value: '90%' },
      { title: 'Price', value: '82%' },
    ],
    btnText: 'Explore more',
  },
  {
    id: 22,
    image: packageImg12,
    title: 'Beautiful parasailing',
    price: 171,
    badgeTitle: '15%',
    address: 'traford Park Lexington,40507',
    rating: '4.8',
    review: '1.6',
    duration: 3,
    travelerCount: 13,
    detailsImg: detailsImg,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. At volutpat diam ut venenatis tellus in metus. Sem et tortor
                    consequat id porta. Et malesuada fames ac turpis egestas sed. Condimentum vitae sapien
                    pellentesque habitant morbi tristique senectus et. Cras semper auctor neque vitae. Turpis in eu
                    mi bibendum neque. Pellentesque habitant morbi tristique senectus et netus. Ut morbi tincidunt
                    augue interdum velit euismod. At in tellus integer feugiat scelerisque varius morbi. Ultrices
                    neque ornare aenean euismod. Imperdiet proin fermentum leo`,
    progresses: [
      { title: 'Service', value: '90%' },
      { title: 'Accommodation', value: '95%' },
      { title: 'Location', value: '80%' },
      { title: 'Price', value: '92%' },
    ],
    btnText: 'Explore more',
  },
];

export const tourPackagesData: ITourDT[] = [
  ...tourPackagesDataOne,
  ...tourPackagesDataTwo,
  ...tourPackagesDataThree,
];
