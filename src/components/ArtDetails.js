import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { getArt } from '../redux/art/art';

const ArtDetails = () => {
  const artsArr = [];
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    if (artsArr.length === 0) {
      dispatch(getArt(id));
    }
  }, []);

  const artsie = useSelector((state) => state.artsReducer);
  if (artsie.name === undefined) {
    return (
      <div className="container p-4">
        <div className="row">
          <div className="col-sm-4" />
          <div className="col-sm-8">
            <h1>
              Loading
            </h1>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="text-white">
      <div className="row headbanner pt-1">
        <Link
          className="nav-link"
          to="/fossils"
        >
          <div className="row pl-2 text-white">
            <h2 className="links-nav col">
              <FontAwesomeIcon icon={faArrowLeft} />
            </h2>
            <h2 className="col">Art Details</h2>
          </div>
        </Link>
      </div>
      <div className="row firstCont">
        <div className="col-xs-6 p-4 villagerCont">
          { /* eslint-disable dot-notation */
            <img src={artsie['image_uri']} alt="villager" className="villagerPic" />
      /* eslint-enable dot-notation */ }
        </div>
        <div className="col-xs-6 villagerCont text-white">
          <h1 className="pt-5">
            Name:
          </h1>
          <h1>
            {artsie.name['name-USen']}
          </h1>
        </div>
      </div>
      <div className="row p-2 separatorBG">
        <p className="m-0">
          Art Data
        </p>
      </div>
      <div className="row p-3 bg-1">
        <h4 className="villagerCont">
          ID
        </h4>
        <h4 className="villagerCont">
          {artsie.id}
        </h4>
      </div>
      <div className="row p-3 bg-2">
        <h4 className="villagerCont">
          Buy Price: $
        </h4>
        <h4 className="villagerCont">
          {artsie['buy-price']}
        </h4>
      </div>
      <div className="row p-3 bg-3">
        <h4 className="villagerCont">
          Sell Price: $
        </h4>
        <h4 className="villagerCont">
          {artsie['sell-price']}
        </h4>
      </div>
    </div>
  );
};

export default ArtDetails;
