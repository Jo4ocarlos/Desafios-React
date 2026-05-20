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
import CreatePost from "./pages/userAuthenticatedPages/CreatePost/CreatePost";
import DashBoard from "./pages/userAuthenticatedPages/DashBoard/DashBoard";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  //vamos criar a logica aqui porque engloba todas as funções e pagina
  const [user, setUser] = useState(undefined)
  const {auth} = useAuthentication()

  const loadingUser = user === undefined //vamos usar na logica la em baixo se o usuario for undefined a gente não renderiza nada

  useEffect(()=>{
    onAuthStateChanged(auth, (user)=>{
      setUser(user)
    })
  }, [auth])
  
  if(loadingUser){
    return <p>Carregando..</p>
  }


  return (
      <AuthContextProvider value={{user}}> {/*passando o usuario aqui eu consigo utilizalo em todos os loccais(até porque é context) */}
      <BrowserRouter>
        <div className="container">
          <header>
            <NavBar />
          </header>

          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={!user? <Login /> : <Navigate to="/"/>} /> {/*se o usuario estiver logado a gente redireciona ele para a home, caso tente forçar a pagina de login pela barra de pesquisa */}
              <Route path="/register" element={!user? <Register /> : <Navigate to="/"/>} />
              <Route path="/about" element={<About />} />
              <Route path="/post/create" element={user? <CreatePost/> : <Navigate to={'/login'}/>}/>
              <Route path="/dashboard" element={user? <DashBoard/> : <Navigate to={'/login'}/>}/>
              <Route path="*" element={<NotFound/>}/>
            </Routes>
          </main>

          <Footer />
        </div>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
