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
  villagers = villagersList;
  villagers.length = 24;
  if (villagers[0] === undefined) {
    return (
      <div className="container p-4">
        <div className="row">
          <div className="col-sm-4" />
          <div className="col-sm-8">
            <h1 className="text-white">
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
          <div className="row">
            <div className="headbanner pt-1">
              <Link
                className="nav-link"
                to="/"
              >
                <div className="row pl-2 text-white">
                  <h2 className="links-nav col">
                    <FontAwesomeIcon icon={faArrowLeft} />
                  </h2>
                  <h2 className="col">Villager List</h2>
                </div>
              </Link>
            </div>
            <div className="col p-5 firstCont bluborder leafcont" />
            <div className="col p-5 firstCont bluborder text-white">
              <h1>Villagers</h1>
              {villagersList.length}
              Elements
            </div>
          </div>
          <div className="row">
            { villagers !== 0
              ? villagers.map((villager) => (
                <VillagerList
                  key={villager.id}
                  name={villager.name['name-USen']}
                  id={villager.id}
                  bday={villager.birthday}
                  icon={villager.icon_uri}
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
                  icon="icon"
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
