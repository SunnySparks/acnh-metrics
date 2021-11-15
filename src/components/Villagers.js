import '../App.css';
import { NavLink } from 'react-router-dom';

const Villager = () => {
  const villagers = [];
  return (
    <div>
      <div>
        <div>
          Villagers:
          {villagers}
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

export default Villager;
