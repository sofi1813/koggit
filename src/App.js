import Inicio from'./vistas/Inicio';
import Login from'./vistas/login';
import Registro from'./vistas/registro';
import Perfil from'./vistas/perfilusuario';
import Header from'./componentes/header';
import Footer from'./componentes/footer';
import PageNotFound from './vistas/PageNotFound';

import Repositorio from'./vistas/repositorio';
import Publicaciones from'./vistas/publicaciones';
import NuevoPost from './vistas/nuevoPost';
import Post from './vistas/Post';

import './css/styles.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { useLocalStorage } from './useLocalStorage';
import { useEffect } from 'react';

export default function App() {
  return (
    <div id="body">
      <Router>
        <Header />
        <Switch>
          <Route path="/Registro" component={Registro}/>
          <Route path="/Login" component={Login}/>
          <Route path="/Perfil" component={Perfil}/>
          <Route path="/Repositorio" component={Repositorio}/>
          <Route path="/Publicaciones" component={Publicaciones}/>
          <Route path="/NuevoPost" component={NuevoPost}/>
          <Route path="/Post" component={Post}/>
          <Route path="/" component={Inicio} exact/>
          <Route path="*" component={PageNotFound}/>
        </Switch>
        <Footer />
      </Router>
      
    </div>
  );
}   


