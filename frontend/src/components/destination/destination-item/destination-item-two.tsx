import Image from 'next/image';
import Link from 'next/link';
import { IDestinationDT } from '@/types/destination-d-t';

interface DestinationItemProps {
  destination: IDestinationDT;
}

const DestinationItemTwo = ({ destination }: DestinationItemProps) => {
  return (
    <div className="it-destination-2-item p-relative">
      <div className="it-destination-2-thumb">
        <Image
          src={destination.image}
          alt={destination.title}
          width={270}
          height={400}
          style={{ height: 'auto' }}
        />
      </div>
      <div className="it-destination-2-text text-center">
        <h3 className="it-destination-2-place">
          <Link href={`/destination-details/${destination.id}`}>
            {destination.title}
          </Link>
        </h3>
        <span className="it-destination-2-tourist">
          {destination.tourCount} Tours
        </span>
      </div>
    </div>
  );
};
export default DestinationItemTwo;
