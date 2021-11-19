import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
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
  if (arts[0] === undefined) {
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
      <div>
        <div>
          <div className="row">
            <div className="headbanner pt-1">
              <Link
                className="nav-link"
                to="/"
              >
                <div className="row pl-2 text-white">
                  <h2 className="links-nav col">
                    <FontAwesomeIcon icon={faArrowLeft} />
                  </h2>
                  <h2 className="col">Art List</h2>
                </div>
              </Link>
            </div>
            <div className="col p-5 firstCont bluborder leafcont" />
            <div className="col p-5 firstCont bluborder text-white">
              <h1>Art</h1>
              {artsList.length}
              Elements
            </div>
          </div>
          <div className="row">
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
    </div>
  );
};

export default Art;
