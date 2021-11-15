import '../App.css';
import { NavLink } from 'react-router-dom';
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
  const villagerName = [];
  villagers.length = 24;
  villagerName.length = 24;
  console.log(villagers);

  return (
    <div>
      <div>
        <div>
          { villagers !== 0
            ? villagers.map((villager) => (
              <VillagerList
                key={villager.id}
                name={villager.name['name-USen']}
                id={villager.id}
                bday={villager['birthday-string']}
                /* eslint-disable dot-notation */
                icon={villager['icon_uri']}
                /* eslint-enable dot-notation */
              />
            ))
            : (
              'Loading Villagers'
            )}
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
