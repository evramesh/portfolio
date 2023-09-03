import "./index.css";

const Item = () => {
  return (
    <div className="grid-container">
      <div className="item-1">
        <p>Discover the beauty of the tropics</p>
        <h1 className="heading">
          Thopical
          <br /> Destinations <br />
          <span>For Student</span>
        </h1>
        <img
          className="com"
          alt="o"
          src="https://res.cloudinary.com/dcr2fwzyk/image/upload/v1693663161/Saly-10_wwvzcm.png"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur.
          <br /> Sit mattis donec mi bibendum integer rutrum nisi. A nec nisi
          vitae
        </p>
        <button className="btn" type="button">
          SIGN UP
        </button>
      </div>

      <div className="item-2">
        <img
          className="pro"
          src="https://res.cloudinary.com/dcr2fwzyk/image/upload/v1693663155/Group_171_tlxevv.png"
          alt="profile"
        />
      </div>
    </div>
  );
};

export default Item;
