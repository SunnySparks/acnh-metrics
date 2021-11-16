import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../App.css';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux';

const FossilList = (props) => {
  // const dispatch = useDispatch();

  const {
    name, id, phrase, image, value,
  } = props;
  if (value === 'value') {
    return (
      <div className="container p-4">
        <div className="row">
          <div className="col-sm-4" />
          <div className="col-sm-8">
            <h2>
              Loading
            </h2>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <h1>
        <Link to={`${id}`}>
          {name}
        </Link>
      </h1>
      <img src={image} alt="user" className="rocketImage" />
      <h4>
        villager ID:
        {id}
      </h4>
      <h4>
        About:
        {phrase}
      </h4>
      <h4>
        Value:
        {value}
      </h4>
    </div>
  );
};

export default FossilList;

FossilList.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  phrase: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
