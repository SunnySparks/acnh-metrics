import '../App.css';
import { NavLink } from 'react-router-dom';

const Fossil = () => {
  const fossils = [];
  return (
    <div>
      <div>
        <div>
          Fossils::
          {fossils}
          <button type="button">
            <NavLink
              className="nav-link"
              to="/"
            >
              <h2 className="links-nav">go back</h2>
            </NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Fossil;
