import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../App.css';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const VillagerList = (props) => {
  const {
    name, id, bday, icon, species,
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
    <div className="col-xs-6 col-lg-6 villagerCont border text-center justify-content-center text-white lato">
      <img src={icon} alt="user" className="rocketImage" />
      <Link to={`${id}`}>
        <span className="links-nav"><FontAwesomeIcon icon={faArrowRight} /></span>
        <h1 className="links-nav">
          {name}
        </h1>
      </Link>
      <h4>
        ID:
        {id}
      </h4>
      <h4>
        Birthday:
        {bday}
      </h4>
      <h4>
        Species:
        {species}
      </h4>
    </div>
  );
};

export default VillagerList;

VillagerList.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  bday: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
};
