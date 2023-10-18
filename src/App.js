
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './app/Landing';
import Team from './app/Team';
import Login from './app/Login';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />}/>
      <Route path="team" element={<Team />} />
      <Route path="login" element={<Login />} />
      
    </Routes>
  </BrowserRouter>
);
}

export default App;
