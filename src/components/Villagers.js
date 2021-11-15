import '../App.css';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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

  villagers.map((villager) => (
    console.log(villager.name['name-USen'])
    /* Object.entries(villager.name).map((name) => (
      console.log(name)
    )) */
  ));

  return (
    <div>
      <div>
        <div>
          { villagers !== 0
            ? villagers.map((villager) => (
              villager.name['name-USen']
            ))
            : (
              'villagers'
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
