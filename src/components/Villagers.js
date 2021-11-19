import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import VillagerList from './VillagerList';
import { getVillagers } from '../redux/villagers/villagers';

const Villager = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVillagers());
  }, []);
  const villagersList = useSelector((state) => state.villagersReducer);
  let villagers = [];
  villagers.length = 24;
  villagers = villagersList;
  if (villagers[0] === undefined) {
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
    <div>
      <div>
        <div>
          <div>
            <Link
              className="nav-link"
              to="/"
            >
              <h2 className="links-nav">
                <FontAwesomeIcon icon={faArrowLeft} />
              </h2>
            </Link>
          </div>
          <div className="row">
            { villagers !== 0
              ? villagers.map((villager) => (
                <VillagerList
                  key={villager.id}
                  name={villager.name['name-USen']}
                  id={villager.id}
                  bday={villager.birthday}
                /* eslint-disable dot-notation */
                  icon={villager['icon_uri']}
                /* eslint-enable dot-notation */
                  species={villager.species}
                  value={villager.species}
                />
              ))
              : (
                <VillagerList
                  key="key"
                  name="name"
                  id="id"
                  bday="bday"
                /* eslint-disable dot-notation */
                  icon="icon"
                /* eslint-enable dot-notation */
                  species="species"
                  value="value"
                />
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Villager;
