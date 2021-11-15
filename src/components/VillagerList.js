import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../App.css';
import React from 'react';
import PropTypes from 'prop-types';
// import { useDispatch } from 'react-redux';

const VillagerList = (props) => {
  // const dispatch = useDispatch();

  const {
    name, id, bday, icon,
  } = props;

  return (
    <div>
      <h1>{name}</h1>
      <img src={icon} alt="user" className="rocketImage" />
      <h4>{id}</h4>
      <h4>{bday}</h4>
    </div>
  );
};

export default VillagerList;

VillagerList.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  bday: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
