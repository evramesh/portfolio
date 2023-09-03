import "./index.css";

const Header = () => (
  <nav className="navbar">
    <div className="items">
      <ul className="nav-items">
        <li className="nav-item home">
          <a href="#_">Home</a>
        </li>
        <li className="nav-item about">
          <a href="#_">About</a>
        </li>
        <li className="nav-item sched">
          <a href="#_">Schedule</a>
        </li>
        <li className="nav-item member">
          <a href="#_">Membership</a>
        </li>
        <li className="nav-item price">
          <a href="#_">Pricing</a>
        </li>
      </ul>
      <div className="nav-div">
        <p className="offer">Offers</p>
        <button className="course" type="button">
          Courses
        </button>
      </div>
    </div>
  </nav>
);

export default Header;
