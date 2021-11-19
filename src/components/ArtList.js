import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../App.css';
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const ArtList = (props) => {
  // const dispatch = useDispatch();
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
    <div className="col-xs-6 col-lg-6 villagerCont border text-center justify-content-center text-white lato bg-1">
      <img src={image} alt="user" />
      <Link to={`${id}`}>
        <span className="links-nav"><FontAwesomeIcon icon={faArrowRight} /></span>
        <h1 className="links-nav">
          <span>{name}</span>
        </h1>
      </Link>
      <h4>
        ID:
        {id}
      </h4>
      <h4>
        Buy Price: $
        {buyPrice}
      </h4>
      <h4>
        Sell Price: $
        {sellPrice}
      </h4>
    </div>
  );
  /* return (
    <div>
      <h1>
        <Link to={`${id}`}>
          {name}
        </Link>
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
  ); */
};

export default ArtList;

ArtList.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  buyPrice: PropTypes.string.isRequired,
  sellPrice: PropTypes.string.isRequired,
};
