import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {
  BrowserRouter as Router, Routes,
} from 'react-router-dom';
import { Route } from 'react-router';
import Home from './Home';
import Villagers from './Villagers';
import Fossil from './Fossils';
import Art from './Art';

const Routing = () => (
  <Router>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/villagers" element={<Villagers />} />
      <Route path="/fossils" element={<Fossil />} />
      <Route path="/art" element={<Art />} />
    </Routes>
  </Router>
);

export default (Routing);
