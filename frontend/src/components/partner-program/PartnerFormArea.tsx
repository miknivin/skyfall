import ContactForm from "../form/contact-form";
import Image from "next/image";
import PartnerForm from "../form/partner-form";
import PartnerMultiForm from "../form/partnerMultiForm";

const PartnerArea = () => {
  return (
    <div className="it-contact-area pt-120 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-xl-7 col-lg-6">
            <div className="it-contact-form-box">
              <PartnerMultiForm />
            </div>
          </div>
          <div className="col-xl-5 col-lg-6">
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "auto",
                minHeight: "100%",
              }}
            >
              <Image
                src="https://ik.imagekit.io/c1jhxlxiy/2148817031.jpg?updatedAt=1744717129801"
                alt="Contact"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PartnerArea;
