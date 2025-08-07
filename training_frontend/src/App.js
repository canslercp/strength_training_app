import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import './App.css';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import ProgramPage from './pages/ProgramPage';
import NewProgramPage from './pages/NewProgramPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/programs" element={<LandingPage />} />
          <Route path="/programs/" element={<LandingPage />} />
          <Route path="/programs/new" element={<NewProgramPage />} />
          <Route path="/programs/:id" element={<ProgramPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
