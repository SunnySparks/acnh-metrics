import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getArt } from '../redux/art/art';

const ArtDetails = () => {
  const artsArr = [];
  const { id } = useParams();
  console.log(id);

  const dispatch = useDispatch();

  useEffect(() => {
    if (artsArr.length === 0) {
      dispatch(getArt(id));
    }
  }, []);

  const artsie = useSelector((state) => state.artsReducer);
  console.log(artsie);
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
    <div>
      <button type="button">
        <Link
          className="nav-link"
          to="/art"
        >
          <h2 className="links-nav">go back</h2>
        </Link>
      </button>
      <h1>
        {artsie.name['name-USen']}
      </h1>
      { /* eslint-disable dot-notation */
        <img src={artsie['image_uri']} alt="villager" className="villagerPic" />
      /* eslint-enable dot-notation */ }
      <h3>
        ID:
        {artsie.id}
      </h3>
      <h2>
        Buy Price: $
        {artsie['buy-price']}
      </h2>
      <h2>
        Sell Price: $
        {artsie['sell-price']}
      </h2>
    </div>
  );
};

export default ArtDetails;
