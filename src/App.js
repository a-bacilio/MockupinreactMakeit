import { Routes, Route, Link } from "react-router-dom";
import Button from './Components/MicroComponents/Button';
import { Card } from './Components/MicroComponents/Card';
import NavBar from './Components/Navbar';
import VerComo from "./Components/VerComo";
import NormalLayout from "./Layouts/NormalLayout";
import Products from "./Pages/Products";

function App() {
  return (
    <div className="App">
      <NormalLayout>
        <VerComo/>
        <NavBar />
        <Routes>
          <Route path="/login" element={<span>Login</span>} />
          <Route path="/register" element={<span>Registrarse</span>} />
          <Route path="/recoverpassword" element={<span>Recuperar contraseña</span>} />


          <Route path="/" element={<Products/>} />
          <Route path="/cart" element={<span>Carrito</span>} />
          <Route path="/orders" element={<span>Ordenes</span>} />
          <Route path="/sendprescription" element={<span>Enviar Recetas</span>} />
          <Route path="/myprescriptions" element={<span>Mis Recetas</span>} />
          <Route path="/myalarms" element={<span>Mis alarmas</span>} />
          <Route path="/myprofile" element={<span>Mi perfil</span>} />
          
          
          <Route path="/approveprescriptions" element={<span>Aprobar recetas</span>} />
          <Route path="/alarmmanager" element={<span>Administrar alarmas</span>} />
          <Route path="/prescriptions" element={<span>Recetas</span>} />
          <Route path="/manageproducts" element={<span>Administrar productos</span>} />


          <Route path="/personnell" element={<span>Agregar Personal</span>} />


          <Route path='*' element={<>Aqui no hay nada :'(' </>} />
        </Routes>
      </NormalLayout>
    </div>
  );
}

export default App;
