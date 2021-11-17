import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getOneVillager } from '../redux/villagers/villagers';

const VillagerDetails = () => {
  const villagerArr = [];
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    if (villagerArr.length === 0) {
      dispatch(getOneVillager(id));
    }
  }, []);

  const villager = useSelector((state) => state.villagersReducer);
  console.log(villager);
  if (villager.name === undefined) {
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
      <button type="button">
        <Link
          className="nav-link"
          to="/villagers"
        >
          <h2 className="links-nav">go back</h2>
        </Link>
      </button>
      <h1>
        Name:
        {villager.name['name-USen']}
      </h1>
      { /* eslint-disable dot-notation */
        <img src={villager['image_uri']} alt="villager" className="villagerPic" />
      /* eslint-enable dot-notation */ }
      <h4>
        villager ID:
        {id}
      </h4>
      <h4>
        Birthday:
        {villager.birthday}
      </h4>
      <h4>
        Species:
        {villager.species}
      </h4>
    </div>
  );
};

export default VillagerDetails;
