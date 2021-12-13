import { Routes, Route, Link } from "react-router-dom";
import Button from './Components/MicroComponents/Button';
import { Card } from './Components/MicroComponents/Card';
import NavBar from './Components/Navbar';
import NormalLayout from "./Layouts/NormalLayout";

function App() {
  return (
    <div className="App">
      <NormalLayout>
      <NavBar/>
      <Routes>
        <Route path="/login" element={<span>Login</span>} />
        <Route path="/products" element={<span>Productos</span>} />
      </Routes>
      </NormalLayout>
    </div>
  );
}

export default App;
