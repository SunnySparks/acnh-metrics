import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../App.css';
import { NavLink } from 'react-router-dom';

const Home = () => (
  <div className="container">
    <div className="row head-banner headbanner pb-3">
      <div className="col p-5 leafcont" />
      <div className="col p-5">
        <h1>ACNH statistics</h1>
        507 Elements
      </div>
    </div>
    <div className="row text-white separatorBG lato pt-2">
      <p>Categories</p>
    </div>
    <div className="row">
      <div className="col category p-4 bg-1">
        <NavLink
          className="nav-link"
          to="/villagers"
        >
          <h3 className="links-nav">
            Villagers:
          </h3>
        </NavLink>
        391 elements. Visible: 25.
      </div>
      <div className="col category p-4 bg-2">
        <NavLink
          className="nav-link"
          to="/fossils"
        >
          <h3 className="links-nav">
            Fossils:
          </h3>
        </NavLink>
        73 elements.
      </div>
    </div>
    <div className="row">
      <div className="col category p-4 bg-2">
        <NavLink
          className="nav-link"
          to="/art"
        >
          <h3 className="links-nav">
            Works of Art:
          </h3>
        </NavLink>
        43 elements.
      </div>
      <div className="col category p-4 bg-1" />
    </div>
  </div>
);
export default Home;
