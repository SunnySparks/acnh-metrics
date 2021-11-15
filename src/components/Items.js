import '../App.css';
import { NavLink } from 'react-router-dom';

const Item = () => {
  const items = [];
  return (
    <div>
      <div>
        <div>
          Items:
          {items}
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

export default Item;
