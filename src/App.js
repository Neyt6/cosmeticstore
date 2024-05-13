import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from './pages/MainPage/MainPage';
import Header from './pages/Header/Header';
import SalePage from './pages/SalePage/SalePage';
import About from './pages/About/About';
import ContactInfo from './pages/ContactInfo/ContactInfo';


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/sale" element={<SalePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<ContactInfo />} />
      </Routes>
    </Router>
  );
}

export default App;
