import logo from './logo.svg';
import './App.css';
import { Route, Routes, Navigate } from "react-router-dom";
import Home from './pages/Home/Home';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';



function App() {
  return (
    <Routes>
      {<Route path="/" exact element={<Home />} />}
      <Route path="/signup" exact element={<Signup />} />
      <Route path="/login" exact element={<Login />} />
      {/* <Route path="/" element={<Navigate replace to="/login" />} /> */}
    </Routes>
  );
}

export default App;
