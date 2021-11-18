import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../App.css';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVillagerLength } from '../redux/villagers/villagers';
import { getFossilLength } from '../redux/fossils/fossils';
import { getArtLength } from '../redux/art/art';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVillagerLength());
    dispatch(getFossilLength());
    dispatch(getArtLength());
  }, []);

  const villagers = useSelector((state) => state.villagersReducer);
  const fossils = useSelector((state) => state.fossilsReducer);
  const artsies = useSelector((state) => state.artsReducer);
  if (villagers.length < 1) {
    return (
      <div className="container p-4">
        <div className="row">
          <div className="col-sm-4" />
          <div className="col-sm-8">
            <h1>
              Loading
            </h1>
          </div>
        </div>
      </div>
    );
  }
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
};

export default Home;
