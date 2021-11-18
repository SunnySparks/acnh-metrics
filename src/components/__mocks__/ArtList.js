import React from 'react';
import PropTypes from 'prop-types';

const ArtList = (props) => {
  const {
    name, id, image, buyPrice, sellPrice,
  } = props;
  if (name === undefined) {
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
      <h3>
        ID:
        {id}
      </h3>
      <h2>
        Buy Price: $
        {buyPrice}
      </h2>
      <h2>
        Sell Price: $
        {sellPrice}
      </h2>
    </div>
  );
};

export default ArtList;

ArtList.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  buyPrice: PropTypes.string.isRequired,
  sellPrice: PropTypes.string.isRequired,
};
