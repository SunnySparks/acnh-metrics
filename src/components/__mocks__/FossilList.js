import React from 'react';
import PropTypes from 'prop-types';

const FossilList = (props) => {
  const {
    name, price, image, idNum,
  } = props;
  if (name === 'undefined') {
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
        {name}
      </h1>
      <img src={image} alt="user" className="rocketImage" />
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
  price: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  idNum: PropTypes.string.isRequired,
};
