import './App.css';
import HomePage from './pages/HomePage';
import SingleCoinPage from './pages/SingleCoinPage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/coins/:id" element={<SingleCoinPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
