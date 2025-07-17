import Image from "next/image";

interface IAttraction {
  name: string;
  image: string;
}

interface AttractionItemProps {
  attraction: IAttraction;
}

const AttractionItem = ({ attraction }: AttractionItemProps) => {
  return (
    <div className="it-attraction-item p-relative">
      <div className="it-attraction-thumb">
        <Image
          src={attraction.image}
          alt={attraction.name}
          width={370}
          height={250}
          style={{ height: "auto" }}
        />
      </div>
      <div className="it-attraction-content">
        <h3 className="it-attraction-title mb-20">{attraction.name}</h3>
        {/* <div className="it-attraction-button">
          <span className="it-btn-blog blog-style-btn">Explore More</span>
        </div> */}
      </div>
    </div>
  );
};

export default AttractionItem;
