import { BsThreeDots } from "react-icons/bs";

import "./index.css";

const Item3 = () => (
  <div>
    <h1 className="our-head">Our Destinations</h1>
    <div className="our-container">
      <div className="block-1">
        <div>
          <img
            className="bg-img"
            alt="card"
            src="https://res.cloudinary.com/dcr2fwzyk/image/upload/v1693663159/card-image_spe5v1.png"
          />
        </div>
        <h2>Harvard University</h2>
        <div className="hamber">
          <p>Cambrigde, Masschusetts, UK</p>
          <BsThreeDots size={25} className="ham" />
        </div>
      </div>
      <div className="block-2">
        <div>
          <img
            className="bg-img"
            alt="card"
            src="https://res.cloudinary.com/dcr2fwzyk/image/upload/v1693663159/card-image-1_tzeo7b.png"
          />
        </div>
        <h2>Oxford University</h2>
        <div className="hamber">
          <p>Oxford England</p>
          <BsThreeDots size={25} className="ham" />
        </div>
      </div>
      <div className="block-3">
        <div>
          <img
            className="bg-img"
            alt="card"
            src="https://res.cloudinary.com/dcr2fwzyk/image/upload/v1693663161/card-image-2_jrpsh9.png"
          />
        </div>
        <h2>Standford University</h2>
        <div className="hamber">
          <p>Stanford Califonia</p>
          <BsThreeDots size={25} className="ham" />
        </div>
      </div>
      <div className="block-4">
        <div>
          <img
            className="bg-img"
            alt="card"
            src="https://res.cloudinary.com/dcr2fwzyk/image/upload/v1693663158/card-image-3_a64tv9.png"
          />
        </div>
        <h2>Oxford University</h2>
        <div className="hamber">
          <p>Nanyang, Ave, Singapura</p>
          <BsThreeDots size={25} className="ham" />
        </div>
      </div>
    </div>
  </div>
);

export default Item3;
