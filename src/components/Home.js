import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  const [busqueda, setbusqueda] = useState('');
  const categoryList = ['Villagers', 'Fossils', 'Art'];

  return (
    <div className="container">
      <div className="row head-banner headbanner pb-3">
        <div className="col p-5 leafcont" />
        <div className="col p-5">
          <h1>ACNH statistics</h1>
          507 Elements
        </div>
      </div>
      <div className="row text-white separatorBG lato pt-2">
        <input
          type="text"
          placeholder="Search by category name"
          onChange={(event) => {
            setbusqueda(event.target.value);
          }}
        />
        { categoryList.filter((cat) => {
          if (busqueda === '') {
            return '';
          } if (cat.toLowerCase().includes(busqueda.toLowerCase())) {
            return cat;
          }
          return false;
        }).map((cat) => (
          <NavLink
            key={categoryList.indexOf(cat)}
            className="nav-link links-nav"
            to={cat}
          >
            <div className="d-flex justify-content-between">
              <h1 className="links-nav link-search">
                {cat}
              </h1>
              <h1 className="links-nav link-search">
                <FontAwesomeIcon icon={faArrowRight} />
              </h1>
            </div>
          </NavLink>
        ))}
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
          391 elements.
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
        <div className="col category halfCont p-4 bg-2">
          <NavLink
            className="nav-link"
            to="/art"
          >
            <h3 className="links-nav">
              Art:
            </h3>
          </NavLink>
          43 elements.
        </div>
      </div>
    </div>
  );
};
export default Home;
