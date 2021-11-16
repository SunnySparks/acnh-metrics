import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../App.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import VillagerList from './VillagerList';
import { getVillagers } from '../redux/villagers/villagers';

const Villager = () => {
  const villagersArr = [];

  const dispatch = useDispatch();

  useEffect(() => {
    if (villagersArr.length === 0) {
      dispatch(getVillagers());
    }
  }, []);

  const villagersList = useSelector((state) => state.villagersReducer);
  const villagers = villagersList;
  villagers.length = 24;

  return (
    <div>
      <div>
        <div>
          <button type="button">
            <Link
              className="nav-link"
              to="/"
            >
              <h2 className="links-nav">go back</h2>
            </Link>
          </button>
          { villagers.length !== 0
            ? villagers.map((villager) => (
              <VillagerList
                key={villager.id}
                name={villager.name['name-USen']}
                id={villager.id}
                bday={villager['birthday-string']}
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
  );
};

export default Villager;
