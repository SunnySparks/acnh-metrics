import {
  BrowserRouter as Router, Routes,
} from 'react-router-dom';
import { Route } from 'react-router';
import Home from './Home';
import Villagers from './Villagers';
import Fossils from './Fossils';
import Items from './Items';

const Routing = () => (
  <Router>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/villagers" element={<Villagers />} />
      <Route path="/fossils" element={<Fossils />} />
      <Route path="/items" element={<Items />} />
    </Routes>
  </Router>
);

export default (Routing);
