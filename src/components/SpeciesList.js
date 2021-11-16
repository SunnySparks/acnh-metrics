import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../App.css';
import React from 'react';
import PropTypes from 'prop-types';

const SpeciesList = (props) => {
  const {
    species, name, bday,
  } = props;

  // console.log(species);
  return (
    <div>
      <h1>{name}</h1>
      <h4>{species}</h4>
      <h4>{bday}</h4>
    </div>
  );
};

export default SpeciesList;

SpeciesList.propTypes = {
  species: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  bday: PropTypes.string.isRequired,
};
