import Login from "./components/Login";
import Profile from "./components/Profile";
import Register from "./components/Register";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
