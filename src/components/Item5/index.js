import "./index.css";

const Item5 = () => (
  <div className="form-container">
    <div className="box-1">
      <img
        className="pro"
        alt="from"
        src="https://res.cloudinary.com/dcr2fwzyk/image/upload/v1693663153/Group_167_f9riwk.png"
      />
    </div>
    <div className="box-2">
      <form>
        <h1>Book now</h1>
        <p>Lorem iqsum dolor sit amet, consecture adpicing elit.</p>
        <div>
          <label htmlFor="city">City</label>
          <input id="city" type="text" placeholder="Placename" />
        </div>
        <div className="arri">
          <div>
            <label htmlFor="arr">ARRIVAL</label>
            <input placeholder="10 October" id="arr" type="text" />
          </div>
          <div>
            <label htmlFor="dis">DEPARTURE</label>
            <input placeholder="11 October" id="dis" type="text" />
          </div>
        </div>
        <div className="star">
          <div className="star-1">
            STAR
            <div className="room">
              <button type="button">-</button>
              <h3 className="r-m">4</h3>
              <button type="button">+</button>
            </div>
          </div>
          <div className="room-1">
            ROOM
            <div className="room">
              <button type="button">-</button>
              <h3 className="r-m">1</h3>
              <button type="button"> +</button>
            </div>
          </div>
        </div>
        <button type="button" className="btn">
          BOOK NOW
        </button>
      </form>
    </div>
  </div>
);
export default Item5;
