import Image from 'next/image';
import Link from 'next/link';
import { IDestinationDT } from '@/types/destination-d-t';

interface DestinationItemProps {
  destination: IDestinationDT;
}

const DestinationItemFour = ({ destination }: DestinationItemProps) => {
  return (
    <div className="it-destination-item p-relative">
      <div className="it-destination-thumb">
        <Link href={`/destination-details/${destination.id}`}>
          <Image
            src={destination.image}
            alt={destination.title}
            width={270}
            height={305}
            style={{ height: 'auto' }}
          />
        </Link>
      </div>
      <div className="it-destination-content">
        <h3 className="it-destination-title">
          <Link href={`/destination-details/${destination.id}`}>
            {destination.title}
          </Link>
        </h3>
        <span>{destination.tourCount} Tours</span>
      </div>
    </div>
  );
};
export default DestinationItemFour;
