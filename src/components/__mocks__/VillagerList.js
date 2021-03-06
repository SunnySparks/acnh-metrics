import PropTypes from 'prop-types';

const VillagerList = (props) => {
  const {
    name, id, bday, icon, species, value,
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
      <img src={icon} alt="user" className="rocketImage" />
      <h4>
        villager ID:
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
      <h4>
        Value:
        {value}
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
  value: PropTypes.string.isRequired,
};
