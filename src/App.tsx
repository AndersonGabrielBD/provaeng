
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar } from '../src/components/NavBar';
import { Home } from './pages/Home';
import { Trees } from './pages/Trees';

const App = () => {
  return (
    <Router>
      <NavBar />
      <div className="py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/arvores" element={<Trees />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
