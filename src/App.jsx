import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Tramites from "./pages/Tramites";
import Contacto from "./pages/Contacto";
import RouteFocusHandler from "./RouteFocusHandler";

function App() {
  return (
    <>
      <header>
        <div className="logo">
          <img src="LogoU.png" alt="Logo de la Universidad" />
          <h1>Universidad SPA</h1>
        </div>

        <nav aria-label="Navegación principal">
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/tramites">Trámites</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
          </ul>
        </nav>

        {/* Buscador accesible */}
        <form className="buscador" role="search" aria-label="Buscar en el sitio">
          <label htmlFor="buscar" className="sr-only">Buscar</label>
          <input id="buscar" type="search" placeholder="Buscar..." aria-label="Campo de búsqueda" />
          <button type="submit" aria-label="Iniciar búsqueda">🔍</button>
        </form>
      </header>

      <RouteFocusHandler />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tramites" element={<Tramites />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>

      <footer>
        <p>&copy; 2025 Universidad SPA - Todos los derechos reservados</p>
      </footer>
    </>
  );
}

export default App;
