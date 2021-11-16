import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../App.css';
import React from 'react';
import PropTypes from 'prop-types';
// import { useDispatch } from 'react-redux';

const VillagerList = (props) => {
  // const dispatch = useDispatch();

  const {
    name, id, bday, icon, species, value,
  } = props;

  return (
    <div>
      <h1>{name}</h1>
      <img src={icon} alt="user" className="rocketImage" />
      <h4>
        villager ID:
        {id}
      </h4>
      <h4>
        Birthday:
        {bday}
      </h4>
      <h4>
        Species:
        {species}
      </h4>
      <h4>
        Value:
        {value}
      </h4>
    </div>
  );
};

export default VillagerList;

VillagerList.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  bday: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
