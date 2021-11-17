import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../App.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ArtList from './ArtList';
import { getArts } from '../redux/art/art';

const Art = () => {
  const artsArr = [];

  const dispatch = useDispatch();

  useEffect(() => {
    if (artsArr.length === 0) {
      dispatch(getArts());
    }
  }, []);

  const artsList = useSelector((state) => state.artsReducer);
  const arts = artsList;

  return (
    <div>
      <div>
        <div>
          <button type="button">
            <Link
              className="nav-link"
              to="/"
            >
              <h2 className="links-nav">go back</h2>
            </Link>
          </button>
          { arts.length !== 0
            ? arts.map((art) => (
              <ArtList
                key={art.id}
                /* eslint-disable dot-notation */
                name={art.name['name-USen']}
                id={art.id}
                image={art['image_uri']}
                buyPrice={art['buy-price']}
                sellPrice={art['sell-price']}
                /* eslint-enable dot-notation */
              />
            ))
            : (
              <ArtList
                key="key"
                name="name"
                id="id"
                phrase="bday"
                image="icon"
                value="value"
              />
            )}
        </div>
      </div>
    </div>
  );
};

export default Art;
