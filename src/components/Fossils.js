import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import FossilList from './FossilList';
import { getFossils } from '../redux/fossils/fossils';

const Fossil = () => {
  const fossilsArr = [];

  const dispatch = useDispatch();

  useEffect(() => {
    if (fossilsArr.length === 0) {
      dispatch(getFossils());
    }
  }, []);

  const fossilsList = useSelector((state) => state.fossilsReducer);
  const fossils = fossilsList;

  if (fossils[0] === undefined) {
    return (
      <div className="container p-4">
        <div className="row">
          <div className="col-sm-4" />
          <div className="col-sm-8">
            <h1 className="text-white">
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
                  <h2 className="col">Fossil List</h2>
                </div>
              </Link>
            </div>
            <div className="col p-5 firstCont bluborder leafcont" />
            <div className="col p-5 firstCont bluborder text-white">
              <h1>Fossils</h1>
              {fossilsList.length}
              Elements
            </div>
          </div>
          <div className="row">
            { fossils.length !== 0
              ? fossils.map((fossil) => (
                <FossilList
                  key={fossil.id}
                /* eslint-disable dot-notation */
                  name={fossil.name['name-USen']}
                  id={fossil['file-name']}
                  price={fossil.price}
                  image={fossil['image_uri']}
                  idNum={fossils.indexOf(fossil)}
                />
              ))
              : (
                <FossilList
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

export default Fossil;
