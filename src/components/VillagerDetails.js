import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getOneVillager } from '../redux/villagers/villagers';

const VillagerDetails = () => {
  const { id } = useParams();
  console.log(id);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneVillager(id));
  }, []);

  const villager = useSelector((state) => state.villagersReducer);
  console.log(villager);
  return (
    <div>
      <h1>
        {villager.name['name-USen']}
      </h1>
      { /* eslint-disable dot-notation */
        <img src={villager['image_uri']} alt="user" className="rocketImage" />
      /* eslint-enable dot-notation */ }
      <h4>
        villager ID:
        {id}
      </h4>
      <h4>
        Birthday:
        {villager['birthday-string']}
      </h4>
      <h4>
        Species:
        {villager.species}
      </h4>
    </div>
  );
};

export default VillagerDetails;
