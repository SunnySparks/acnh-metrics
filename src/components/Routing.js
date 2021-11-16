import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {
  BrowserRouter as Router, Routes,
} from 'react-router-dom';
import { Route } from 'react-router';
import Villagers from './Villagers';
import VillagerList from './VillagerList';

const Routing = () => (
  <Router>
    <Routes>
      <Route exact path="/" element={<Villagers />} />
      <Route exact path="/villagerList" element={<VillagerList />} />
    </Routes>
  </Router>
);

export default (Routing);
