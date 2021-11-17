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
    name, id, price, image, idNum,
  } = props;
  if (price === undefined) {
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
        Fossil Name:
        {id}
      </h4>
      <h4>
        ID:
        {idNum}
      </h4>
      <h4>
        Price: $
        {price}
      </h4>
    </div>
  );
};

export default FossilList;

FossilList.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  idNum: PropTypes.string.isRequired,
};
