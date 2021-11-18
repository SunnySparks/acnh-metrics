import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../App.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
  console.log(fossilsList);

  if (fossils[0] === undefined) {
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
          <button type="button">
            <Link
              className="nav-link"
              to="/"
            >
              <h2 className="links-nav">go back</h2>
            </Link>
          </button>
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
                /* eslint-enable dot-notation */
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
  );
};

export default Fossil;
