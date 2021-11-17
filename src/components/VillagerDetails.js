import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getOneVillager } from '../redux/villagers/villagers';

const VillagerDetails = () => {
  const { id } = useParams();
  // console.log(id);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneVillager(id));
  }, []);

  const villager = useSelector((state) => state.villagersReducer);
  console.log(villager[0]);
  return (
    <div>
      <button type="button">
        <Link
          className="nav-link"
          to="/"
        >
          <h2 className="links-nav">go back</h2>
        </Link>
      </button>
      <h1>
        Name:
        {villager[0]}
      </h1>
      { /* eslint-disable dot-notation */
        <img src={villager[1]} alt="villager" className="villagerPic" />
      /* eslint-enable dot-notation */ }
      <h4>
        villager ID:
        {id}
      </h4>
      <h4>
        Birthday:
        {villager[2]}
      </h4>
      <h4>
        Species:
        {villager[3]}
      </h4>
    </div>
  );
};

export default VillagerDetails;
