import '../App.css';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import VillagerList from './VillagerList';
// import SpeciesList from './SpeciesList';
import { getVillagers } from '../redux/villagers/villagers';
import SpeciesList from './SpeciesList';

const Villager = () => {
  const villagersArr = [];
  const antEaters = [];
  const bears = [];
  const birds = [];
  const bulls = [];
  const cats = [];
  const cubs = [];
  const chickens = [];
  const cows = [];
  const alligators = [];
  const deer = [];
  const dogs = [];
  const ducks = [];
  const elephants = [];
  const frogs = [];
  const goats = [];
  const gorillas = [];
  const hamsters = [];
  const hippos = [];
  const horses = [];
  const koalas = [];
  const kangaroos = [];
  const lions = [];
  const monkeys = [];
  const mice = [];
  const octopi = [];
  const ostriches = [];
  const eagles = [];
  const penguins = [];
  const pigs = [];
  const rabbits = [];
  const rhinos = [];
  const sheep = [];
  const equir = [];
  const tigers = [];
  const wolves = [];
  const dispatch = useDispatch();

  useEffect(() => {
    if (villagersArr.length === 0) {
      dispatch(getVillagers());
    }
  }, []);

  const villagersList = useSelector((state) => state.villagersReducer);
  const villagers = villagersList;
  // const villagerName = [];

  villagers.map((villager) => {
    switch (villager.species) {
      case 'Anteater':
        antEaters.push(villager);
        break;
      case 'Bear':
        bears.push(villager);
        break;
      case 'Bird':
        birds.push(villager);
        break;
      case 'Bull':
        bulls.push(villager);
        break;
      case 'Cat':
        cats.push(villager);
        break;
      case 'Cub':
        cubs.push(villager);
        break;
      case 'Chicken':
        chickens.push(villager);
        break;
      case 'Cow':
        cows.push(villager);
        break;
      case 'Alligator':
        alligators.push(villager);
        break;
      case 'Deer':
        deer.push(villager);
        break;
      case 'Dog':
        dogs.push(villager);
        break;
      case 'Duck':
        ducks.push(villager);
        break;
      case 'Elephant':
        elephants.push(villager);
        break;
      case 'Frog':
        frogs.push(villager);
        break;
      case 'Goat':
        goats.push(villager);
        break;
      case 'Gorilla':
        gorillas.push(villager);
        break;
      case 'Hamster':
        hamsters.push(villager);
        break;
      case 'Hippo':
        hippos.push(villager);
        break;
      case 'Horse':
        horses.push(villager);
        break;
      case 'Koala':
        koalas.push(villager);
        break;
      case 'Kangaroo':
        kangaroos.push(villager);
        break;
      case 'Lion':
        lions.push(villager);
        break;
      case 'Monkey':
        monkeys.push(villager);
        break;
      case 'Mouse':
        mice.push(villager);
        break;
      case 'Octopus':
        octopi.push(villager);
        break;
      case 'Ostrich':
        ostriches.push(villager);
        break;
      case 'Eagle':
        eagles.push(villager);
        break;
      case 'Penguin':
        penguins.push(villager);
        break;
      case 'Pig':
        pigs.push(villager);
        break;
      case 'Rabbit':
        rabbits.push(villager);
        break;
      case 'Rhino':
        rhinos.push(villager);
        break;
      case 'Sheep':
        sheep.push(villager);
        break;
      case 'Squirrel':
        equir.push(villager);
        break;
      case 'Tiger':
        tigers.push(villager);
        break;
      case 'Wolf':
        wolves.push(villager);
        break;
      default:
        return;
    }
    /* eslint-disable consistent-return */
    return villager;
    /* eslint-enable consistent-return */
  });

  antEaters.map((villager) => {
    console.log(villager);
    return villager;
  });
  return (
    <div>
      <div>
        <div>
          { villagers !== 0
            ? dogs.map((villager) => (
              <SpeciesList
                key={villager.id}
                name={villager.name['name-USen']}
                id={villager.id}
                bday={villager['birthday-string']}
                /* eslint-disable dot-notation */
                icon={villager['icon_uri']}
                species={villager.species}
              />
            ))
            : (
              'Loading Villagers'
            )}
          <button type="button">
            <NavLink
              className="nav-link"
              to="/"
            >
              <h2 className="links-nav">go back</h2>
            </NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Villager;
