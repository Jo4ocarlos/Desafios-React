import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  NavLink,
} from "react-router-dom";
//Hooks
import { useState, useEffect } from "react";
import { useAuthentication } from "./hooks/useAuthentication";

//context
import { AuthContextProvider } from "./context/AuthContext";
//firebase
import { onAuthStateChanged } from "firebase/auth"; // essa função nativa do firebase mapeia se autenticação do usuario foi feita com sucesso


//pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
//components
import NavBar from "./components/Navbar/NavBar";
import Footer from "./components/Footer/Footer";
//css
import "./App.css";
import { useContext } from "react";

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <div className="container">
          <header>
            <NavBar />
          </header>

          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
