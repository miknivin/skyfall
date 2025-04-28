import Image from 'next/image';
import Link from 'next/link';
import { IDestinationDT } from '@/types/destination-d-t';

interface DestinationProps {
  destination: IDestinationDT;
}

const DestinationItemThree = ({ destination }: DestinationProps) => {
  return (
    <div className="it-destination-list-item p-relative">
      <span className="it-destination-list-number">
        {destination.tourCount} Tours
      </span>
      <div className="it-destination-list-thumb fix p-relative">
        <Link href="#">
          <Image
            src={destination.image}
            alt={destination.title}
            width={370}
            height={243}
            style={{ height: 'auto' }}
          />
        </Link>
        <div className="it-destination-list-text">
          <h3 className="it-destination-list-title">
            <Link href={`/destination-details/${destination.id}`}>
              {destination.title}
            </Link>
          </h3>
          <span className="it-destination-list-departures">
            {destination.departuresCount} Departures
          </span>
        </div>
      </div>
    </div>
  );
};
export default DestinationItemThree;
