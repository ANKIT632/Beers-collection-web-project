import NavBar from './components/navbar';
import Home from './pages/home'
import FavCollection from './pages/favouriteCollection'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import './App.css';


function App() {

  return (
    <div >
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/FavCollection" element={<FavCollection />} />
        </Routes>
      </Router>
    </div>
  );
}


export default App;
