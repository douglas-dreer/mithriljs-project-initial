import m from 'mithril';

//Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';


//Admin-LTE
import 'admin-lte';
import 'admin-lte/dist/css/adminlte.min.css';

//Font Awesome
import '@fortawesome/fontawesome-free/js/all.js'
  
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