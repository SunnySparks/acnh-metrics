import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../App.css';
import { NavLink } from 'react-router-dom';

const Home = () => (
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
                <h2 className="links-nav">Villagers</h2>
              </NavLink>
            </div>
            <div className="mb-1">|</div>
            <div>
              <NavLink
                className="nav-link"
                to="/fossils"
              >
                <h2 className="links-nav">Fossils</h2>
              </NavLink>
            </div>
            <div className="mb-1">|</div>
            <div>
              <NavLink
                className="nav-link"
                to="/items"
              >
                <h2 className="links-nav">Items</h2>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default Home;
