import { destinationDataFour } from '@/data/destination-data';
import DestinationItemThree from './destination-item/destination-item-three';

const DestinationArea = () => {
  return (
    <div className="it-destination-area it-inner-destination pt-120 pb-85">
      <div className="container">
        <div className="row">
          {destinationDataFour.map((destination) => (
            <div key={destination.id} className="col-xl-4 col-lg-4 col-md-6">
              <DestinationItemThree destination={destination} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default DestinationArea;
