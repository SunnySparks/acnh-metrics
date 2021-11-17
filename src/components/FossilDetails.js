import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getOneFossil } from '../redux/fossils/fossils';

const FossilDetails = () => {
  const fossilArr = [];
  const { name } = useParams();
  console.log(name);

  const dispatch = useDispatch();

  useEffect(() => {
    if (fossilArr.length === 0) {
      dispatch(getOneFossil(name));
    }
  }, []);

  const fossil = useSelector((state) => state.fossilsReducer);
  console.log(fossil);
  if (fossil.name === undefined) {
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
          to="/fossils"
        >
          <h2 className="links-nav">go back</h2>
        </Link>
      </button>
      <h1>
        Name:
        {fossil.name['name-USen']}
      </h1>
      { /* eslint-disable dot-notation */
        <img src={fossil['image_uri']} alt="villager" className="villagerPic" />
      /* eslint-enable dot-notation */ }
      <h4>
        Price:
        {fossil.price}
      </h4>
    </div>
  );
};

export default FossilDetails;
