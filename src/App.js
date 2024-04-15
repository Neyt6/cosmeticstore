import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from './pages/MainPage/MainPage';
import Header from './pages/Header/Header';


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
