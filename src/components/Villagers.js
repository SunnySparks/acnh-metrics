import '../App.css';
// import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import VillagerList from './VillagerList';
// import SpeciesList from './SpeciesList';
import { getVillagers } from '../redux/villagers/villagers';
// import SpeciesList from './SpeciesList';

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
  const species = [
    'Anteaters', 'Alligators', 'Bears', 'Birds',
    'Bulls', 'Cats', 'Cubs', 'Chickens',
    'Cows', 'Deer', 'Dogs', 'Ducks', 'Eagles', 'Elephants',
    'Frogs', 'Goats', 'Gorillas', 'Hamsters', 'Hippos',
    'Horses', 'Kangaroos', 'Koalas', 'Lions', 'Monkeys', 'Mice', 'Octopuses',
    'Ostriches', 'Penguins', 'Pigs', 'Rabbits', 'Rhinos', 'Sheep',
    'Squirrels', 'Tigers', 'Wolves'];
  const dispatch = useDispatch();

  useEffect(() => {
    if (villagersArr.length === 0) {
      dispatch(getVillagers());
    }
  }, []);

  const villagersList = useSelector((state) => state.villagersReducer);
  const villagers = villagersList;
  console.log(villagers);

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

  const animalRender = (type) => {
    type.map((villager) => (
      <VillagerList
        key={villager.id}
        name={villager.name['name-USen']}
        id={villager.id}
        bday={villager['birthday-string']}
        /* eslint-disable dot-notation */
        icon={villager['icon_uri']}
        /* eslint-enable dot-notation */
        species={villager.species}
      />
    ));
  };
  species.map((type) => {
    switch (type) {
      case 'Anteaters':
        animalRender(antEaters);
        break;
      case 'Bears':
        animalRender(bears);
        break;
      case 'Birds':
        animalRender(birds);
        break;
      case 'Bulls':
        animalRender(bulls);
        break;
      case 'Cats':
        animalRender(cats);
        break;
      case 'Cubs':
        animalRender(cubs);
        break;
      case 'Chickens':
        animalRender(chickens);
        break;
      case 'Cows':
        animalRender(cows);
        break;
      case 'Alligators':
        animalRender(alligators);
        break;
      case 'Deer':
        animalRender(deer);
        break;
      case 'Dogs':
        animalRender(dogs);
        break;
      case 'Ducks':
        animalRender(ducks);
        break;
      case 'Elephants':
        animalRender(elephants);
        break;
      case 'Frogs':
        animalRender(frogs);
        break;
      case 'Goats':
        animalRender(goats);
        break;
      case 'Gorillas':
        animalRender(gorillas);
        break;
      case 'Hamsters':
        animalRender(hamsters);
        break;
      case 'Hippos':
        animalRender(hippos);
        break;
      case 'Horses':
        animalRender(horses);
        break;
      case 'Koalas':
        animalRender(koalas);
        break;
      case 'Kangaroos':
        animalRender(kangaroos);
        break;
      case 'Lions':
        animalRender(lions);
        break;
      case 'Monkeys':
        animalRender(monkeys);
        break;
      case 'Mice':
        animalRender(mice);
        break;
      case 'Octopuses':
        animalRender(octopi);
        break;
      case 'Ostriches':
        animalRender(ostriches);
        break;
      case 'Eagle':
        animalRender(eagles);
        break;
      case 'Penguins':
        animalRender(penguins);
        break;
      case 'Pigs':
        animalRender(pigs);
        break;
      case 'Rabbits':
        animalRender(rabbits);
        break;
      case 'Rhinos':
        animalRender(rhinos);
        break;
      case 'Sheep':
        animalRender(sheep);
        break;
      case 'Squirrels':
        animalRender(equir);
        break;
      case 'Tigers':
        animalRender(tigers);
        break;
      case 'Wolves':
        animalRender(wolves);
        break;
      default:
        return;
    }
    /* eslint-disable consistent-return */
    return type;
    /* eslint-enable consistent-return */
  });
  console.log(villagers);
  return (
    <div>
      <div>
        <div>
          { villagers !== 0
            ? villagers.map((villager) => (
              <VillagerList
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
        </div>
      </div>
    </div>
  );
};

export default Villager;
