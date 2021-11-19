import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import VillagerList from './VillagerList';
import { getVillagers } from '../redux/villagers/villagers';

const Villager = () => {
  const dispatch = useDispatch();
  const [busqueda, setbusqueda] = useState('');
  useEffect(() => {
    dispatch(getVillagers());
  }, []);

  const villagersList = useSelector((state) => state.villagersReducer);
  let villagers = [];
  villagers = villagersList;
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
            <div className="row px-5 py-2 separatorBG">
              {console.log(busqueda)}
              <input
                type="text"
                placeholder="Monkey, Cat, Horse, etc..."
                onChange={(event) => {
                  setbusqueda(event.target.value);
                }}
              />
            </div>
            {/* eslint-disable arrow-body-style */
              /* eslint-disable no-unused-vars */
              /* eslint-disable consistent-return */
              /* eslint-disable array-callback-return */
              villagers.filter((val) => {
                if (busqueda === '') {
                  return '';
                } if (val.species.toLowerCase().includes(busqueda.toLowerCase())) {
                  return val;
                }
              }).map((val, key) => {
                return (
                  <VillagerList
                    key={val.id}
                    name={val.name['name-USen']}
                    id={val.id}
                    bday={val.birthday}
                    icon={val.icon_uri}
                    species={val.species}
                    value={val.species}
                  />
                );
              })
}
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
