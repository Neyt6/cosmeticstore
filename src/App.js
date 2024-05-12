import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from './pages/MainPage/MainPage';
import Header from './pages/Header/Header';
import SalePage from './pages/SalePage/SalePage';


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/sale" element={<SalePage />} />
      </Routes>
    </Router>
  );
}

export default App;
