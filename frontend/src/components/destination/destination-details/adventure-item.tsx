import Image from "next/image";

interface IAdventure {
  name: string;
  image: string;
}

interface AdventureItemProps {
  adventure: IAdventure;
}

const AdventureItem = ({ adventure }: AdventureItemProps) => {
  return (
    <div className="it-adventure-item p-relative">
      <div className="it-adventure-thumb">
        <Image
          src={adventure.image}
          alt={adventure.name}
          width={370}
          height={250}
          style={{ height: "auto" }}
        />
      </div>
      <div className="it-adventure-content">
        <h3 className="it-adventure-title mb-20">{adventure.name}</h3>
        <div className="it-adventure-button">
          <span className="it-btn-blog blog-style-btn">Know More</span>
        </div>
      </div>
    </div>
  );
};

export default AdventureItem;
