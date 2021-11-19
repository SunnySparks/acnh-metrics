import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../App.css';
import { NavLink } from 'react-router-dom';

const Home = () => (
  <div className="container">
    <div className="row head-banner p-3">
      <div className="col p-5 leafcont" />
      <div className="col p-5">
        <h1>ACNH statistics</h1>
        507 Elements
      </div>
    </div>
    <div className="row text-white lato bg-2">
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
      <div className="col category p-4 bg-1">Placeholder</div>
    </div>
  </div>
);
  /*
  return (
    <nav className="navBar navbar-expand-lg p-4 border border-bottom bg-white">
      <div className="container-fluid">
        <div>
          <div>
            <div className="d-flex align-items-center">
              <div className="ms-5 logo-nav">
                <span className="me-4">
                  image
                </span>
                <span className="title-nav">title nav</span>
              </div>
              <div className="mb-1">|</div>
              <div>
                <NavLink
                  className="nav-link"
                  to="/villagers"
                >
                  <h2 className="links-nav">
                    Villagers:
                  </h2>
                  {villagers}
                  elements. Visible: 25.
                </NavLink>
              </div>
              <div className="mb-1">|</div>
              <div>
                <NavLink
                  className="nav-link"
                  to="/fossils"
                >
                  <h2 className="links-nav">
                    Fossils:
                  </h2>
                  {fossils}
                  elements.
                </NavLink>
              </div>
              <div className="mb-1">|</div>
              <div>
                <NavLink
                  className="nav-link"
                  to="/art"
                >
                  <h2 className="links-nav">
                    Works of Art:
                  </h2>
                  {artsies}
                  elements.
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
  */

export default Home;
