import m from 'mithril';

//Bootstrap
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
  

//Compoment
import HomeView from "../views/home.view";
import SobreProjetoView from '../views/sobre.view';

const body = document.body;

m.route(body, "/", {
    "/" : HomeView,
    "/sobre" : SobreProjetoView
});