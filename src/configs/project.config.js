import m from 'mithril';

//Bootstrap
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
  

//Compoment
import HomeView from "../views/home.view";
import SobreProjetoView from '../views/sobre.view';
import ServiceView from '../views/service.view';

const body = document.body;

m.route(body, "/", {
    "/" : HomeView,
    "/service" : ServiceView,
    "/sobre" : SobreProjetoView
});